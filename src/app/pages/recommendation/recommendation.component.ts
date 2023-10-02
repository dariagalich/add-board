import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Properties} from "../../api.interface";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {

  products: Properties[] = []
  images: Blob[] = []

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(result => {
        this.products = result
        console.log('this.products', this.products)
      })
  }
}
