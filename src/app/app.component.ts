import { Component } from '@angular/core';
// import {Daum} from "./shared/product/interface";
// import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  // products: Daum[] = []
  //
  // constructor(private _productService: ProductsService) {
  // }
  //
  // ngOnInit() {
  //   this._productService.getProducts().subscribe(resp => {
  //     this.products = resp.data
  //     console.log('this.products', this.products)
  //   })
  // }
}
