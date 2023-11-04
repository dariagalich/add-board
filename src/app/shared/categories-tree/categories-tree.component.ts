import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";
import {Category, CategoryTree} from "../../interfaces";
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: string
}


@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent {

  private _transformer = (node: CategoryTree, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  categories: Category[] = []
  tree: CategoryTree[] = []
  categoriesTree: CategoryTree[] = []


  constructor(
    private categoriesService: CategoriesService,
    private searchService: SearchService,
    private router:Router
    ) {
    this.getCategories()

  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe((response:Category[]) => {
        this.categories = response

        this.tree = this.buildCategoryTree(response)
        this.dataSource.data = this.tree
      })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  buildCategoryTree(data:Category[]): CategoryTree[] {

    let map: { [key: string]: number; } = {}, node: CategoryTree, roots: CategoryTree[] = [], i;
    let dataWithChildren: CategoryTree[] = data.map((item, index) => {
      map[item.id] = index;
      return {...item, children: [], $ref: ''}
    })
  debugger
    for (i = 0; i < dataWithChildren.length; i += 1) {
      node = dataWithChildren[i];
      if (node.parentId !== null && node.parentId !== '00000000-0000-0000-0000-000000000000') {
        dataWithChildren[map[node.parentId]].children.push(node)
      } else {
        roots.push(node);
      }
    }

    return roots;
  }

  async navigateToCategory(categoryId: string) {



    this.searchService.category.next(categoryId);

    if (this.router.url !== '/main')
      this.router.navigate(['/main'],{queryParams: {category: categoryId}}).then()


  }
}
