import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {SearchService} from "../../services/search.service";
import {Observable} from "rxjs";
import {Advert} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {

  public products$!: Observable<Advert[]>;
  searchInside!: string
  search!: string
  category!: string

  constructor(
    private productsService: ProductsService,
    private searchService: SearchService,
    private _cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
          this.search = params['search'];
          this.category = params['category'];

          if (!this.search && !this.category) {
            this.getProduct()
          } else {
            this.searchProducts(this.search, this.category)
          }
        }
      );

    this.searchService.search.subscribe((search) => {
      this.searchProducts(search, this.category)
    })

    this.searchService.category.subscribe((category) => {
      this.searchProducts(this.search, category)
    })

  }

  getProduct() {
    this.products$ = this.productsService.getProducts()
  }

  searchProducts(search: string, category: string) {
    this.products$ = this.productsService.searchProducts(search, category)
  }

}
