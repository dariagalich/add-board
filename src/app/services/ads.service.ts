import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Encoding} from "../api.interface";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})

export class AdsService {

  constructor(private http: HttpClient) { }

  adAdd(name:string, description:string, images:[], cost:string, email:string, phone:string, location:string, categoryId:string): Observable<Encoding>{
    return this.http.post<Encoding>(apiUrl + 'Advert', {name, description, images, cost, email, phone, location, categoryId})
  }

}
