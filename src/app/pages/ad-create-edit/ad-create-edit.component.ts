import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {Properties, Properties10} from "../../api.interface";
import {Observable} from "rxjs";


export interface Food {
  value: string;
  viewValue: string;
  // disable?: boolean;
}

@Component({
  selector: 'app-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss']
})
export class AdCreateEditComponent {
  addAd: UntypedFormGroup = new UntypedFormGroup({})

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  foods: Food[] = [
    {value: 'none-0', viewValue: 'Нажмите, чтобы выбрать'},
    {value: 'steak-1', viewValue: 'Steak'},
    {value: 'pizza-2', viewValue: 'Pizza'},
    {value: 'tacos-3', viewValue: 'Tacos'}
  ];

  // categories: Properties10[] = []

  categories$: Observable<Properties10[]>;

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService) {
    this._buildForm()
    this.categories$ = this.categoriesService.getCategories()
  }

  private _buildForm() {
    this.addAd = this.fb.group({
      categoryId:['',[Validators.required]],
      addName: ['',[Validators.required]],
      description: [''],
      location: ['', [Validators.required]],
      images:['',[Validators.required]],
      cost:['',[Validators.required]]
    })
  }

}
