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
import {buildCategoryTree} from "../../utils/helpers"


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

  categories: Category[] = []
  tree: CategoryTree[] = []
  categoriesTree: CategoryTree[] = []
  isVisibleTree = true

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

  constructor(
    private categoriesService: CategoriesService,
    private searchService: SearchService,
    private router: Router
  ) {
    this.getCategories()

  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe((response: Category[]) => {
        this.categories = response

        this.tree = buildCategoryTree(response)
        this.dataSource.data = this.tree
      })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  async navigateToCategory(categoryId: string) {
    this.searchService.category.next(categoryId);
    this.router.navigate(['/main'], {queryParams: {category: categoryId}}).then()

    this.isVisibleTree = !this.isVisibleTree

    this.closeCategory()
  }

  closeCategory() {
    this.categoriesService.getIsVisibleCategories(this.isVisibleTree)
  }
}
