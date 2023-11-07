import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {SearchService} from "../../services/search.service";
import {map, Observable} from "rxjs";
import {Advert} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public products$!: Observable<Advert[]>
  searchInside!: string
  search!: string
  category!: string
  selected = 'none'

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
          this.search = params['search']
          this.category = params['category']

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

  filterAndSortAds(ads$: Observable<Advert[]>, sortOrder: string): Observable<Advert[]> {
    return ads$.pipe(
      map((ads: Advert[]) => {
        let filteredAds = ads.slice()

        if (sortOrder === 'ascending') {
          filteredAds = filteredAds.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
        } else if (sortOrder === 'descending') {
          filteredAds = filteredAds.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
        }
        return filteredAds
      })
    )
  }

  setSortAdverts(ads$: Observable<Advert[]>, sortOrder: string) {
    this.products$ = this.filterAndSortAds(ads$, sortOrder)
  }
}
