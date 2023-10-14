import {Injectable} from '@angular/core';
import {Properties15, Properties7} from "../api.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

const AUTH_API = 'http://194.87.237.48:5000/Auth/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  get token(): string {
    return ''
  }
  private setToken(response?: any) {
    console.log(response)
  }

  login(login: string, password: string): Observable<Properties15> {
    return this.http.post<Properties15>(AUTH_API + 'Login', {login,password}, httpOptions)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() { }

  register(name: string, login: string, password: string): Observable<Properties7> {
      return this.http.post<Properties7>(AUTH_API + 'Register', {
        name,login,password
      }, httpOptions);
    }

  isAuthenticated(): boolean {
    return !!this.token
  }



}

