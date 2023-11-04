import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../interfaces";

const API = "http://194.87.237.48:5000/"


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private isVisibleCategoriesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API + 'Categories', {})
  }

  getIsVisibleCategories(value: boolean) {
    this.isVisibleCategoriesSubject.next(value)
  }

  setIsVisibleCategories(): Observable<boolean> {
    return this.isVisibleCategoriesSubject.asObservable()
  }

}
