import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../shared/product/interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private _http: HttpClient){ }

  getProducts(): Observable <Root>{
    return this._http.get<Root>('https://fakerapi.it/api/v1/products?_quantity=10&_taxes=3&_categories_type=uuid');
  }

}
