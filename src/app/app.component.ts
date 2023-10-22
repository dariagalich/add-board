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

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  ngOnInit() {
    // const potentialToken = localStorage.getItem('auth-token')
    // if (potentialToken !== null && this.tokenExpired(potentialToken)){
    //   this.authService.setToken(potentialToken)
    //   console.log(this.authService.getToken())
    // }
    const potentialToken = localStorage.getItem('auth-token')
    if (potentialToken !== null){
      this.authService.setToken(potentialToken)
    }
  }
}
