import {ChangeDetectorRef, Component} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Properties} from "../../api.interface";
import {SearchService} from "../../services/search.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {

  public products$!: Observable<Properties[]>;


  constructor(
    private productService: ProductsService,
    private searchService: SearchService,
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getProduct()
    this.searchService.search.subscribe((search) => {
      this.searchProducts(search)
    })
  }

  getProduct() {
    this.products$ = this.productService.getProducts()
  }

  searchProducts(search: string) {
    this.products$ = this.productService.searchProducts(search)
  }

}
