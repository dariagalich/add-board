import {Component, ElementRef, ViewChild} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {AdsService} from "../../services/ads.service";
import {Advert, Breadcrumb, Category, CategoryTree, User} from "../../interfaces";
import {CategoriesService} from "../../services/categories.service";
import {buildCategoryTree} from "../../shared/utils/helpers";
import {GeocoderService} from "../../services/geocoder.service";

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
  toggleMap = false
  allCategories: CategoryTree[] = []
  breadcrumbs: Breadcrumb[] = []
  selectedImage!: string
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000
  };

  @ViewChild('myElement') myElement!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private authService: AuthService,
    private userService: UsersService,
    private adsService: AdsService,
    private categoriesService: CategoriesService,
    private geoCoder: GeocoderService,
  ) {
  }

  ngOnInit() {
    this.product$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.productService.getById(params['id'])
      }))
    this.product$.subscribe(response => {
      this.ad = response
      const currentCategory = response.category
      this.product$.subscribe(response => {
        this.selectedImage = response.imagesIds[0]
      });
      this.geoCoder.getAddressCoordinates(this.ad.location)
      this.categoriesService.getCategories().subscribe((response: Category[]) => {
        this.allCategories = buildCategoryTree(response)
        this.breadcrumbs = this.buildBreadcrumbPath(currentCategory, this.allCategories)
      })
    })
    if (this.authService.isAuthenticated()) {

      this.checkIsCreatedByUser().subscribe(result => {
        this.isAdvertCreateByUser = result
      })
    }

  }

  selectImage(image: string) {
    this.selectedImage = image
  }

  checkIsCreatedByUser(): Observable<boolean> {
    return this.route.params.pipe(
      map(params => params['id']),
      switchMap(adId => this.userService.getCurrentUser().pipe(
        map((response: User) => response.adverts),
        map(adverts => adverts.map(item => item.id)),
        map(adIds => adIds.includes(adId))
      ))
    )
  }

  deleteAdvert(advertId: string) {
    this.adsService.deleteAdd(advertId)
  }

  showPhone() {
    this.togglePhone = !this.togglePhone
  }

  showMap(){
    this.toggleMap = true
    setTimeout(() => {
      this.myElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  buildBreadcrumbPath(category: Category, allCategories: CategoryTree[], path: Breadcrumb[] = []): Breadcrumb[] {
    const parentCategory = allCategories.find(c => c.id === category.parentId)
    if (parentCategory && parentCategory.parentId !== '00000000-0000-0000-0000-000000000000') {
      path.unshift({label: parentCategory.name, id: parentCategory.id})
      return this.buildBreadcrumbPath(parentCategory, allCategories, path)
    } else {
      if (parentCategory && parentCategory.parentId === '00000000-0000-0000-0000-000000000000') {
        path.unshift({label: parentCategory.name, id: parentCategory.id})
      }
      path.push({label: category.name, id: category.id})
      return path
    }
  }
}
