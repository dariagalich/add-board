import {Injectable} from '@angular/core';
import {Properties7} from "../api.interface";
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

  private token = ''

  constructor(private http: HttpClient) {
  }



  login(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(AUTH_API + 'Login', {login,password}, httpOptions)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token',token)
            this.setToken(token)
          }
        )
      )
  }

  register(name: string, login: string, password: string): Observable<Properties7> {
      return this.http.post<Properties7>(AUTH_API + 'Register', {
        name,login,password
      }, httpOptions);
  }

  logout() {
    this.setToken('')
    localStorage.clear()
  }


  getToken(): string {
    return this.token
  }

  setToken(token: string) {
    this.token = token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }



}

