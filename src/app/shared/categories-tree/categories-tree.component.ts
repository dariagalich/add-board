import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category, Properties10} from "../../api.interface";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent {

  private _transformer = (node: Category, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  categories: Properties10[] = []
  tree: Category[] = []
  categoriesTree: Category[] = []


  constructor(private categoriesService: CategoriesService) {
    this.getCategories()
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe((response) => {
        this.categories = response

        this.tree = this.buildCategoryTree(response)
        this.dataSource.data = this.tree
      })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  buildCategoryTree(data: { id: string, parentId: string, name: string }[]): Category[] {

    let map: { [key: string]: number; } = {}, node: Category, roots: Category[] = [], i;
    let dataWithChildren: Category[] = data.map((item, index) => {
      map[item.id] = index;
      return {...item, children: [], $ref: ''}
    })

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
}
