import {Component} from '@angular/core';
import {FormBuilder, FormControl, UntypedFormGroup, Validators} from "@angular/forms";


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

  constructor(private fb: FormBuilder) {
    this._buildForm()
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
