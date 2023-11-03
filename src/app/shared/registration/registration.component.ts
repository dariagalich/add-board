import {Component, OnDestroy} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthorizationDialogComponent} from "../authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnDestroy {


  authSub!: Subscription
  registrationForm: UntypedFormGroup = new UntypedFormGroup({})

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
    })
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

  // loginValidator: ValidatorFn = (control:AbstractControl): ValidationErrors | null =>{
  //
  // }

  onSubmit(): void {
    const {name, login, password} = this.registrationForm.controls;
    this.authService.register(name.value, login.value, password.value).subscribe(
      () => {
        this.registrationForm.reset()
        this.openDialog()
      }
    )
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe()
    }
  }

  openDialog() {
      this.matDialog.open(AuthorizationDialogComponent)
  }
  navigateToMain(){
    this.router.navigate(['/']).then(() => {})
  }
}
