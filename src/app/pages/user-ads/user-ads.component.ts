import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Properties, Properties22} from "../../api.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.scss']
})
export class UserAdsComponent implements OnInit {

  public products$!: Observable<Properties[]>;

  constructor(
    private userService: UsersService
  ) {
  }

  ngOnInit() {
      this.getUserProduct()
  }

  getUserProduct() {
    this.products$ = this.userService.getCurrentUser()
      .pipe(map((x:Properties22)=> x.adverts)
    )
  }
}
