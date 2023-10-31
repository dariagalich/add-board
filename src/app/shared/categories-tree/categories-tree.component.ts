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




  constructor(private categoriesService: CategoriesService) {
    this.getCategories()
  }

  getCategories(){
    this.categoriesService.getCategories()
      .subscribe((response) => {
        this.categories = response
        this.tree = this.buildCategoryTree(response)
        console.log('tree',this.tree)
        this.dataSource.data = this.tree;
      })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  buildCategoryTree(data: { id: string, parentId: string, name: string }[]): Category[] {
    const categoryMap = new Map<string, Category>();

    // Создание объектов Category на основе данных с сервера
    data.forEach(item => {
      const category: Category = {
        $ref:'',
        id: item.id,
        parentId: item.parentId || null,
        name: item.name,
        children: []
      };
      categoryMap.set(item.id, category);
    });

    const tree: Category[] = [];
    // const categoryTree: Category[] = []
    // Построение дерева категорий
    data.forEach(item => {
      const category = categoryMap.get(item.id);
      const parentCategory = categoryMap.get(item.parentId);

      if (category && parentCategory) {
        if (!parentCategory.children) {
          parentCategory.children = []; // Добавьте проверку на undefined и инициализацию children
        }
        parentCategory.children.push(category);
        tree.push(parentCategory);
      } else if (category) {
        tree.push(category);
      }
    });

    return tree;
  }


}
