import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductsService} from "../../../../services/products.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {


  public search: string = ''
  private HttpClient: HttpClient;

  constructor(
    private router: Router,
    _http: HttpClient,
    private searchService: ProductsService
  ){
    this.HttpClient = _http
  }

  searchAd(): void {
    if (this.search) {
      this.searchService.searchProducts(this.search).subscribe((response) => {
        console.log(response)
      })
    }
  }
}
