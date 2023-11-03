import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {Advert, User} from "../../interfaces";

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.scss']
})
export class UserAdsComponent implements OnInit {

  public products$!: Observable<Advert[]>;

  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if(this.isAuth())
    this.getUserProduct()
  }

  getUserProduct() {
    this.products$ = this.userService.getCurrentUser()
      .pipe(map((x:User)=> x.adverts)
    )
  }
  isAuth(): boolean{
    return this.authService.isAuthenticated()
  }
}
