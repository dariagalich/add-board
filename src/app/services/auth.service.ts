import {Injectable} from '@angular/core';
import {Properties7} from "../api.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const apiUrl = 'http://194.87.237.48:5000/Auth/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = ''

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string) {
    return this.http.post<{ token: string }>(apiUrl + 'Login', {login, password})
      .subscribe((response: any) => {
        this.setToken(response)
        localStorage.setItem('auth-token', this.token)
        console.log('get token ', this.getToken())
      })

  }

  register(name: string, login: string, password: string): Observable<Properties7> {
    return this.http.post<Properties7>(apiUrl + 'Register', {
      name, login, password
    });
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

