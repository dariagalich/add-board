import {Injectable} from '@angular/core';
import {Properties7} from "../api.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const AUTH_API = 'http://194.87.237.48:5000/Auth/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = ''

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string) {
    return this.http.post<{ token: string }>(AUTH_API + 'Login', {login, password})
      .subscribe((response: any) => {
        this.setToken(response)
        localStorage.setItem('auth-token', this.token)
        console.log('get token ', this.getToken())
      })

  }

  register(name: string, login: string, password: string): Observable<Properties7> {
    return this.http.post<Properties7>(AUTH_API + 'Register', {
      name, login, password
    }, httpOptions);
  }


  setToken(token: string) {
    this.token = 'Bearer ' + token
  }

  getToken(): string {
    return this.token
  }


  logout() {
    this.setToken('')
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}

