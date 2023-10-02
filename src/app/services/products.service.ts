import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties} from "../api.interface";

@Injectable({ providedIn: 'root' })
export class ProductsService{

  constructor(private _http: HttpClient){ }

  getProducts(): Observable <Properties[]>{
    return this._http.post<Properties[]>('http://194.87.237.48:5000/Advert/search',{})
  }

}
