import {Component} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";

@Component({
  selector: 'app-authorization-dialog',
  templateUrl: './authorization-dialog.component.html',
  styleUrls: ['./authorization-dialog.component.scss'],
})

export class AuthorizationDialogComponent {

  authorizationForm: UntypedFormGroup = new UntypedFormGroup({})

  rememberMe: boolean = false

  constructor(private matDialog: MatDialog, private fb: FormBuilder) {
    this._buildForm()
  }

  private _buildForm() {
    this.authorizationForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: false
    })
  }

  submit() {
    if (!this.authorizationForm.invalid){
      console.log(this.authorizationForm)
    }
  }

  remember(){
    this.rememberMe = !this.rememberMe
  }

  openDialog() {
    this.matDialog.open(RegistrationComponent)
  }

  onlyNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return !Number(control.value) ? {onlyNumber: {value: 'Тут буква'}} : null;
    };
  }

}


