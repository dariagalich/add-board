import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {Properties10} from "../../api.interface";
import {Observable} from "rxjs";
import {AdsService} from "../../services/ads.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
})
export class AdCreateEditComponent {

  @ViewChild('inputImage') inputImageRef!: ElementRef;
  addAd: UntypedFormGroup = new UntypedFormGroup({})

  categories$: Observable<Properties10[]>

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private adsService: AdsService,
    private router: Router
  ) {
    this._buildForm()
    this.categories$ = this.categoriesService.getCategories()
  }

  private _buildForm() {
    this.addAd = this.fb.group({
      categoryId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      location: ['', [Validators.required]],
      images: [[]],
      cost: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
    })

  }


  adImage() {
    this.inputImageRef.nativeElement.click()
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();

        reader.onload = (event: any) => {
          this.addAd.controls['images'].value.push(event.target.result);

          this.addAd.patchValue({
            fileSource: this.addAd.controls['images'].value
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
      formData.append('location', this.addAd.get('location')?.value)
      formData.append('images[]', this.addAd.get('images')?.value)
      formData.append('email', this.addAd.get('email')?.value)
      formData.append('phone', this.addAd.get('phone')?.value)
      formData.append('cost', this.addAd.get('cost')?.value)

      this.adsService.adAdd(formData)
        .subscribe((resp) => {
          console.log(resp)
        })
      {
        // this.addAd.reset()
        // this.router.navigate(['/main']).then(() =>{})
      }
    }
  }

}
