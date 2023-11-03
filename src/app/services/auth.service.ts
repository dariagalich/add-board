import {Injectable} from '@angular/core';
import {Properties22, Properties7} from "../api.interface";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "./users.service";

const apiUrl = 'http://194.87.237.48:5000/Auth/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName = new Subject<string>()
  token = ''
  private tokenExpirationDate!: Date

  constructor(
    private http: HttpClient,
    private router: Router,
    private matDialog: MatDialog,
    private userService: UsersService,
  ) {
  }

  login(login: string, password: string) {
    this.http.post<{ token: string }>(apiUrl + 'Login', {login, password})
      .subscribe((response: any) => {
        this.setToken(response)
        this.getTokenExpirationDate(response)
        localStorage.setItem('token', response)
        if (this.tokenExpirationDate) {
          localStorage.setItem('token-expiration-date', this.tokenExpirationDate.toISOString())
        }
        this.userService.getCurrentUser().subscribe((response: Properties22) => {
          this.userName.next(response.name)
        })
        this.matDialog.closeAll()
        window.location.reload()
      })
  }

  setCurrentName() {
    this.userService.getCurrentUser().subscribe((response: Properties22) => {
      this.userName.next(response.name)
    })
  }

  getUserNameObservable() {
    return this.userName.asObservable();
  }

  setToken(receivedToken: string) {
    this.token = 'Bearer ' + receivedToken
  }

  getToken(): string {
    return this.token || ''
  }

  getTokenExpirationDate(token: string): Date | null {
    const decodedToken: any = jwt_decode(token);
    if (decodedToken && decodedToken) {
      const expirationDate = new Date(decodedToken.exp*1000);
      this.tokenExpirationDate = expirationDate;
      return expirationDate;
    }
    return null;
  }

  isTokenExpired(expToken: string): boolean {
    if (!expToken) {
      return true;
    } else {
      const currentDate = new Date();
      const expTokenDate = new Date(expToken)
      console.log('currentDate ', currentDate)
      console.log('expTokenDate ', expTokenDate)
      return currentDate > expTokenDate;
    }
  }

  logout() {
    this.token = ''
    localStorage.clear()
    this.userName.next('')
    this.router.navigate(['/']).then()
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  register(name: string, login: string, password: string): Observable<Properties7> {
    return this.http.post<Properties7>(apiUrl + 'Register', {
      name, login, password
    })
  }

}

