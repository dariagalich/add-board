import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isVisibleTree: boolean = false

  constructor(
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit() {
    this.categoriesService.setIsVisibleCategories().subscribe((value: boolean) => {
      this.isVisibleTree = value
    })
  }

  showTree() {
    this.isVisibleTree = !this.isVisibleTree
  }

}

