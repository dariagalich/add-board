import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Properties14} from "../../api.interface";

// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [
//           {
//             name: 'Pumpkins',
//             children: [{name: '111'}]
//           },
//           {
//             name: 'Carrots'
//           }
//         ],
//       },
//     ],
//   },
// ];


@Component({
  selector: 'app-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent {

  categories: Properties14[] = []

  constructor(private categoriesService: CategoriesService) {
  }

  get(): void {

    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response
      console.log(response)
    })

  }

  // c: Properties2

  // treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  // dataSource = new MatTreeNestedDataSource<FoodNode>();
  //
  // constructor() {
  //   this.dataSource.data = TREE_DATA;
  // }
  //
  // hasChild = (_: number, node: FoodNode) => {
  //   return !!node.children && node.children.length > 0;
  // };

  // treeControl = new NestedTreeControl<Properties10>(node => node.name);
  // dataSource = new MatTreeNestedDataSource<Properties10>();
  //
  //
  // hasChild = (_: number, node: Properties10) => {
  //   return !!node.childs.description && node.childs.description.length > 0;
  // };

  // public search: string = ''
  // private HttpClient: HttpClient;
  //
  // constructor(
  //   private router: Router,
  //   _http: HttpClient,
  //   private searchService: CategoriesService
  // ) {
  //   this.HttpClient = _http
  //   // this.dataSource.data = this.categories;
  // }




}
