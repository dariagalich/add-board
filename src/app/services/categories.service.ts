import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties14} from "../api.interface";

const API = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient){ }

  getCategories(): Observable <Properties14[]>{
    return this.http.get<Properties14[]>(API + '/Categories',{})
  }

}
