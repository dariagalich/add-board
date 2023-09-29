import { Component } from '@angular/core';
import {Daum} from "../../shared/product/interface";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {

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
