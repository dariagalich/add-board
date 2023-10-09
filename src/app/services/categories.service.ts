import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories, CategoriesId, Childs, Properties, Properties10, Properties2} from "../api.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient){ }

  getCategories(): Observable <Properties2[]>{
    return this.httpClient.get<Properties2[]>('http://194.87.237.48:5000/Categories',{})
  }

}
