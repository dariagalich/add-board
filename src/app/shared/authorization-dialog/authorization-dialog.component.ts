import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";
// import {TokenStorageService} from "../../services/token-storage.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization-dialog',
  templateUrl: './authorization-dialog.component.html',
  styleUrls: ['./authorization-dialog.component.scss'],
})

export class AuthorizationDialogComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  authorizationForm: UntypedFormGroup = new UntypedFormGroup({})

  rememberMe: boolean = false

  constructor(
    private matDialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ){
    this._buildForm()
  }

  ngOnInit() {
  }

  private _buildForm() {
    this.authorizationForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^(8|\+7)[\-\s]?\(?\d{3}\)?[\-\s]?[\d\-\s]{7,10}$/mg)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: false
    })
  }

  submit(){
    const { login, password } = this.authorizationForm.controls
    this.authService.login(login.value,password.value).subscribe(()=>{
      this.authorizationForm.reset()
      // this.router.navigate(['/login','catalog']).then(() =>{})
    })
  }

  reloadPage(): void {
    window.location.reload();
  }


  remember() {
    this.rememberMe = !this.rememberMe
  }

  openDialog() {
    this.matDialog.open(RegistrationComponent)
  }

}


