import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties} from "../api.interface";

const apiUrl = 'http://194.87.237.48:5000/Advert/'

@Injectable({ providedIn: 'root' })
export class ProductsService{


  constructor(private http: HttpClient){ }

  getProducts(): Observable <Properties[]>{
    return this.http.post<Properties[]>(apiUrl + 'search',{})
  }

  searchProducts(value: string): Observable<Properties[]> {
    return this.http.post<Properties[]>(apiUrl + 'search', { search: value })
  }

  getById(id: string):Observable<Properties>{
    return this.http.get<Properties>(apiUrl + id)
  }

}
