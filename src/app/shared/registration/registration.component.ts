import {Component} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {AuthorizationDialogComponent} from "../authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  authSub!: Subscription
  registrationForm: UntypedFormGroup = new UntypedFormGroup({})
  errorMessage = ''

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private matDialog: MatDialog,
  ) {
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
    },)
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      const {name, login, password} = this.registrationForm.controls;
      const user = {
        name: name.value,
        login: login.value,
        password: password.value
      }
      this.authService.register(user)
        .subscribe({
            next: () => {
              this.registrationForm.reset();
              this.matDialog.closeAll();
              this.openDialog();
            },
            error: (response) => {
              if (response.status === 400 && response.error.login) {
                const errorMessage = response.error.login[0];
                if (errorMessage === 'Пользователь с таким логином уже существует.') {
                  this.errorMessage = 'Пользователь с таким номером уже существует!';
                  console.log(this.errorMessage)
                }
              }
              return new Observable<never>(() => {
                throw new Error('Ошибка');
              })
            }
          }
        )
    } else {
      Object
        .values(this.registrationForm.controls).forEach(control => {
        control.markAsTouched();
        control.markAsDirty();
      })
    }
  }

  confirmPassValidator: ValidatorFn = (): ValidationErrors | null => {
    const passwordKey = this.registrationForm.controls['password']?.value;
    const confirmPasswordKey = this.registrationForm.controls['confirmPassword']?.value;
    return !(passwordKey === confirmPasswordKey) ? {confirmPass: true} : null;
  }

  captchaValidator: ValidatorFn = (): ValidationErrors | null => {
    const captcha = this.registrationForm.controls['captcha']?.value;
    const captchaKey = '863208';
    return !(captcha === captchaKey) ? {correctCaptcha: true} : null;
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }

  navigateToMain() {
    this.router.navigate(['/']).then(() => {
    })
  }
}
