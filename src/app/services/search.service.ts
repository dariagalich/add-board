import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search: Subject<string> = new Subject()

  // constructor(private httpClient: HttpClient) {
  // }

}
