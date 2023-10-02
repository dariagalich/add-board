import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit{

  form!: FormGroup
  rememberMe: boolean = false

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(null,[
        Validators.required,
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit(){
    if (this.form.invalid){
      return
    }
  }

  openDialog() {
    this.matDialog.open(RegistrationComponent)
  }
}


