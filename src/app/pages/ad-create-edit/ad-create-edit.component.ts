import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {Observable} from "rxjs";
import {AdsService} from "../../services/ads.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Advert, Category, User} from "../../interfaces";

@Component({
  selector: 'app-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
})
export class AdCreateEditComponent implements OnInit {

  @ViewChild('inputImage') inputImageRef!: ElementRef;
  addAd: UntypedFormGroup = new UntypedFormGroup({})

  categories$!: Observable<Category[]>

  userAd!: Advert
  private adId: string = ''
  currentUser!: User
  imagesView: string[] = []
  allImages: string[] = []

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private adsService: AdsService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.adId = params['id'];
    })
    if (this.adId) {
      this.productService.getById(this.adId)
        .subscribe({
          next: (ad: Advert) => {
            this.userAd = ad;
            console.log(this.userAd.imagesIds)
            this.allImages.push(
              ...this.userAd.imagesIds
                .map(item => 'http://194.87.237.48:5000/Images/' + item)
            )
            this._buildForm(); // Вызываем метод _buildForm после успешного получения данных userAd
          }
        })
    }

    this._buildForm()
    this.categories$ = this.categoriesService.getCategories()
  }

  private _buildForm() {
    this.addAd = this.fb.group({
      categoryId: [this.userAd ? this.userAd.category.id : '', [Validators.required]],
      name: [this.userAd ? this.userAd.name : '', [Validators.required]],
      description: [this.userAd ? this.userAd.description : ''],
      location: [this.userAd ? this.userAd.location : '', [Validators.required]],
      images: [this.userAd ? this.userAd.imagesIds : []],
      cost: [this.userAd ? this.userAd.cost : '', [Validators.required]],
      email: [this.userAd ? this.userAd.email : '', [Validators.email]],
      phone: [this.userAd ? this.userAd.phone : '', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
    })
  }

  adImage() {
    this.inputImageRef.nativeElement.click()
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      console.log(filesAmount)
      for (let i = 0; i < filesAmount; i++) {

        let reader = new FileReader();
        reader.onload = (event: any) => {
          // this.addAd.controls['images'].value.push(event.target.result);
          this.allImages.push(event.target.result);
          // this.imagesView.push(event.target.result);

          this.addAd.patchValue({
            fileSource: this.imagesView
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }

    }
  }

  submit() {
    if (this.addAd.valid) {

      const formData = new FormData()

      formData.append('categoryId', this.addAd.get('categoryId')?.value)
      formData.append('name', this.addAd.get('name')?.value)
      formData.append('description', this.addAd.get('description')?.value)
      console.log('desc ', this.addAd.get('description')?.value)
      formData.append('location', this.addAd.get('location')?.value)
      for (let i = 0; i < this.addAd.get('images')?.value.length; i++) {
        formData.append('images', this.addAd.get('images')?.value[i]);
      }
      formData.append('email', this.addAd.get('email')?.value)
      formData.append('phone', this.addAd.get('phone')?.value)
      formData.append('cost', this.addAd.get('cost')?.value)

      if (!this.userAd) {
        this.adsService.adAdd(formData)
          .subscribe((resp) => {
            console.log(resp)
          })
      } else {
        this.adsService.editAdd(this.userAd.id, formData)
      }
      this.router.navigate(['/user-ads']).then()
    }
  }
}
