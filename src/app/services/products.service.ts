import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advert} from "../interfaces";

const apiUrl = 'http://194.87.237.48:5000/Advert/'

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Advert[]> {
    return this.http.post<Advert[]>(apiUrl + 'search', {})
  }

  searchProducts(search: string, category: string): Observable<Advert[]> {
    return this.http.post<Advert[]>(apiUrl + 'search', {search: search, category: category})
  }

  getById(id: string): Observable<Advert> {
    return this.http.get<Advert>(apiUrl + id)
  }
}
