import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties10} from "../api.interface";

const API = "http://194.87.237.48:5000/"

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient){ }

  getCategories(): Observable <Properties10[]>{
    return this.httpClient.get<Properties10[]>(API + 'Categories',{})
  }

}
