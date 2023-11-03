import {Component} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {AdsService} from "../../services/ads.service";
import {Advert, User} from "../../interfaces";

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
})
export class AdViewComponent {


  product$!: Observable<Advert>;
  isAuth = this.authService.isAuthenticated()

  ad!: Advert
  currentUser!: User
  adId!: string
  isAdvertCreateByUser!: boolean
  togglePhone = false

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private authService: AuthService,
    private userService: UsersService,
    private adsService: AdsService
  ) {
  }

  ngOnInit() {

    this.product$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.productService.getById(params['id'])
      }))

    if (this.authService.isAuthenticated()) {

      this.checkIsCreatedByUser().subscribe(result => {
        // console.log('result', result)
        this.isAdvertCreateByUser = result;
      });
    }

  }

  checkIsCreatedByUser(): Observable<boolean> {
    return this.route.params.pipe(
      map(params => params['id']),
      switchMap(adId => this.userService.getCurrentUser().pipe(
        map((response: User) => response.adverts),
        map(adverts => adverts.map(item => item.id)),
        map(adIds => adIds.includes(adId))
      ))
    );
  }

  deleteAdvert(advertId: string) {
    this.adsService.deleteAdd(advertId)
  }

  showPhone(){
    this.togglePhone = !this.togglePhone
  }

}
