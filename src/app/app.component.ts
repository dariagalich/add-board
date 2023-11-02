import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shop';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('token')
    const expiredTokenDate = localStorage.getItem('token-expiration-date')

    if (expiredTokenDate && potentialToken && !this.authService.isTokenExpired(expiredTokenDate) ){
      this.authService.setToken(potentialToken)
    }
    else{
      this.authService.logout()
    }
  }
}
