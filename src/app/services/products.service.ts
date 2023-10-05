import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties} from "../api.interface";

@Injectable({ providedIn: 'root' })
export class ProductsService{

  constructor(private httpClient: HttpClient){ }

  getProducts(): Observable <Properties[]>{
    return this.httpClient.post<Properties[]>('http://194.87.237.48:5000/Advert/search',{})
  }

  searchProducts(value: string): Observable<any[]> {
    return this.httpClient
      .post<any[]>('http://194.87.237.48:5000/Advert/search', {
        search: value,
      })
  }

}
