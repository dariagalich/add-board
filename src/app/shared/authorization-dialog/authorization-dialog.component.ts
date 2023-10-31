import {Component, OnDestroy} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

const expirationDate = new Date();

@Component({
  selector: 'app-authorization-dialog',
  templateUrl: './authorization-dialog.component.html',
  styleUrls: ['./authorization-dialog.component.scss'],
})

export class AuthorizationDialogComponent implements OnDestroy {

  authSub!: Subscription

  authorizationForm: UntypedFormGroup = new UntypedFormGroup({})

  rememberMe: boolean = false



  constructor(
    private matDialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this._buildForm()

    this.route.queryParams.subscribe((params:Params) => {
      if (params['registered']){
        // Вы вошли в систему
      } else  if (params['accessDenied']){
        // Сначала войдите в систему
      }

    })
  }

  private _buildForm() {
    this.authorizationForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: false
    })
  }


  // submit(){
  //   // this.authService.setTokenExpirationDate(expirationDate);
  //   // const userLoginData = { this.authorizationForm}
  //   const { login, password } = this.authorizationForm.controls
  //   this.authSub = this.authService.login(login.value, password.value)
  //   // {
  //   //   this.authorizationForm.reset()
  //   //   this.router.navigate(['/user-ads']).then(() =>{})
  //   // }
  // }

  submit(){
    // this.authService.setTokenExpirationDate(expirationDate);
    const { login, password } = this.authorizationForm.controls
    this.authService.login(login.value,password.value)
    this.authorizationForm.reset()
  }

  ngOnDestroy() {
    if (this.authSub){
      this.authSub.unsubscribe()
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  remember() {
    this.rememberMe = !this.rememberMe
  }

  openDialogRegistration() {
    this.matDialog.open(RegistrationComponent)
  }

  // closeDialog(){
  //   this.matDialog.closeAll()
  // }

}


