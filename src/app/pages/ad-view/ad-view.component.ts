import {Component} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {Properties, Properties22} from "../../api.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {AdsService} from "../../services/ads.service";

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
})
export class AdViewComponent {

  product$!: Observable<Properties>;
  isAuth = this.authService.isAuthenticated()

  ad!: Properties
  currentUser!: Properties22
  adId!: string
  isAdvertCreateByUser!: boolean

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

    this.checkIsCreatedByUser().subscribe(result => {
      console.log('result',result)
      if (result) {
        // The ad was created by the user
        this.isAdvertCreateByUser = true
        console.log('Ad was created by the user');
      } else {
        // The ad was not created by the user
        this.isAdvertCreateByUser = false
        console.log('Ad was not created by the user');
      }
    });

  }

  deleteAdvert(advertId:string){
    this.adsService.deleteAdd(advertId)
  }
  // isCreatedByUser(): boolean {
  //   this.route.params.subscribe(params => {
  //     this.adId = params['id'];
  //   })
  //   this.userService.getCurrentUser()
  //     .subscribe((response: Properties22) => {
  //       response.adverts.forEach(item => {
  //         if (this.adId == item.id) {
  //           return true
  //         } else return false
  //       })
  //     })
  //   return false
  // }

  checkIsCreatedByUser(): Observable<boolean> {
    return this.route.params.pipe(
      map(params => params['id']),
      switchMap(adId => this.userService.getCurrentUser().pipe(
        map((response: Properties22) => response.adverts),
        map(adverts => adverts.map(item => item.id)),
        map(adIds => adIds.includes(adId))
      ))
    );
  }





}
