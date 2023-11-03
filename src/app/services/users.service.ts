import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces";

const apiUrl = 'http://194.87.237.48:5000/'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(apiUrl + 'Users/current')
  }

  editUserName(userId: string, form: any): Observable<User> {
    return this.http.put<User>(apiUrl + 'Users/'+ userId, form)
  }

  getUserById(userId: string): Observable<User>{
    return this.http.get<User>(apiUrl + 'Users/'+ userId)
  }
}
