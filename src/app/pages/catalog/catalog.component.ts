import {ChangeDetectorRef, Component} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Properties} from "../../api.interface";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  products: Properties[] = []

  constructor(private productService: ProductsService,  private _cdr: ChangeDetectorRef,) {

  }

  ngOnInit() {
    // this.productService.getProducts()
    //   .subscribe(result => {
    //     this.products = result
    //     console.log('this.products', this.products)
    //   })
    this.test()
  }

  test(){
    this.productService.getProducts()
      .subscribe(result => {
        this.products = result
        this._cdr.detectChanges();
        console.log('this.products', this.products)
      })
  }

}
