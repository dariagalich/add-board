import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Properties22} from "../api.interface";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<Properties22> {
    return this.http.get<Properties22>(apiUrl + 'Users/current')
  }



}
