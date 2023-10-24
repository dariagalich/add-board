import {Component} from '@angular/core';
import {FormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  UserForm: UntypedFormGroup = new UntypedFormGroup({})

  constructor(
    private fb: FormBuilder,
  ) {
    this._buildFormUser()
  }

  private _buildFormUser() {
    this.UserForm = this.fb.group({
      name: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required]],
    })
  }


}
