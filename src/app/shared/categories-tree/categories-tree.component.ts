import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Properties10} from "../../api.interface";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
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

  categories: Properties10[] = []

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response;
      this.dataSource.data = response;
      console.log(response)
    })
  }


  private _transformer = (node: Properties10, level: number) => {
    return {
      expandable: !!node.childs && node.childs.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.childs,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;




}
