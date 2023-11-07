import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {Advert, User} from "../../interfaces";
import {AdsService} from "../../services/ads.service";

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.scss']
})
export class UserAdsComponent implements OnInit {
  public products$!: Observable<Advert[]>;
  errorMessage = ''

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private adsService: AdsService,
  ) {
  }

  ngOnInit() {
    if (this.isAuth())
      this.getUserProduct()
    this.adsService.setErrorMessage().subscribe((response) => {
      this.errorMessage = response
      this.showErrorMessage(this.errorMessage)
    })
  }

  getUserProduct() {
    this.products$ = this.userService.getCurrentUser()
      .pipe(map((x: User) => x.adverts)
      )
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated()
  }

  showErrorMessage(message: string) {
    this.errorMessage = message
    setTimeout(() => {
      this.errorMessage = ''
    }, 10000)
  }
}
