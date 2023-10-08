import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm: UntypedFormGroup = new UntypedFormGroup({})

  constructor(private fb: FormBuilder) {
    this._buildForm()
  }
  private _buildForm() {
    this.registrationForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern('[А-Яа-яЁё]*')]],
      email: ['',[Validators.required, Validators.email,]],
      phone: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',[Validators.required, this.confirmPassValidator]],
      captcha:['',[Validators.required, this.captchaValidator]]
    })
  }

  confirmPassValidator: ValidatorFn = (control:AbstractControl): ValidationErrors | null => {
    const passwordKey = control.get('password');
    const confirmPasswordKey = control.get('confirmPassword');

    // return passwordKey?.value == confirmPasswordKey?.value ? {confirmPass: true} : null;

    return passwordKey && confirmPasswordKey && passwordKey?.value === confirmPasswordKey?.value ? {confirmPass: true} : null;


  }



  captchaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
      const captcha = control.get('captcha');
      const captchaKey = '863208';

      return captcha?.value !== captchaKey ? {correctCaptcha: {value: captcha?.value !== captchaKey}} : null;

  }


}
