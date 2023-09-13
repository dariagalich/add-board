import { Component } from '@angular/core';
import {Daum} from "../shered/product/interface";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  products: Daum[] = []

  constructor(private _productService: ProductsService) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(resp => {
      this.products = resp.data
      console.log('this.products', this.products)
    })
  }

}
