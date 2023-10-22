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

  // adAdd(Name:string, Description:string, Images:[], Cost:string, Email:string, Phone:string, Location:string, CategoryId:string): Observable<Encoding>{
  //   return this.http.post<Encoding>(apiUrl + 'Advert', {Name, Description, Images, Cost, Email, Phone, Location, CategoryId})
  // }


  adAdd(form:any): Observable<Encoding>{
    return this.http.post<Encoding>(apiUrl + 'Advert',  form)
  }

}
