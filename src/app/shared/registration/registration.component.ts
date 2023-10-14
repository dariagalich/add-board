import {Component} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  registrationForm: UntypedFormGroup = new UntypedFormGroup({})

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this._buildForm()
  }

  private _buildForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-zА-Яа-яЁё]*')]],
      email: ['', [Validators.required, Validators.email,]],
      login: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.confirmPassValidator]],
      captcha: ['', [Validators.required, this.captchaValidator]]
    })
  }

  confirmPassValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const passwordKey = control.get('password');
    const confirmPasswordKey = control.get('confirmPassword');

    // return passwordKey?.value == confirmPasswordKey?.value ? {confirmPass: true} : null;

    return passwordKey && confirmPasswordKey && passwordKey?.value === confirmPasswordKey?.value ? {confirmPass: true} : null;


  }

  captchaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const captcha = control.get('captcha');
    const captchaKey = '863208';

    // return captcha?.value !== captchaKey ? {correctCaptcha: {value: captcha?.value !== captchaKey}} : null;
    return captcha && captchaKey && captcha?.value === captchaKey ? {confirmPass: true} : null;

  }

  submit(): void {

    //   const {name, login, password} = this.registrationForm.controls;
    //
    //   this.authService.register(name.value, login.value, password.value).subscribe(
    //     data => {
    //       console.log(data);
    //       this.isSuccessful = true;
    //       this.isSignUpFailed = false;
    //     },
    //     err => {
    //       this.errorMessage = err.error.message;
    //       console.log(this.errorMessage)
    //       this.isSignUpFailed = true;
    //     }
    //   );

    const { name, login, password } = this.registrationForm.controls;
    this.authService.register(name.value, login.value, password.value).subscribe(() => {
      this.registrationForm.reset()
      console.log(this.registrationForm)
      // this.router.navigate(['/login','catalog']).then(() =>{})
    })
  }
}
