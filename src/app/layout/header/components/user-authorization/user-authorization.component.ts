import {Component, OnInit} from '@angular/core';
import {AuthorizationDialogComponent} from "../../../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../../../../services/users.service";
import {map, Observable} from "rxjs";
import {Properties22} from "../../../../api.interface";
import {AuthService} from "../../../../services/auth.service";


@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent implements OnInit{

  public products$!: Observable<string>;
  showLinks: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private userService: UsersService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.getUserName()
    this.isAuth()
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }

  getUserName(){
    this.products$ = this.userService.getCurrentUser()
      .pipe(map((response:Properties22)=>response.name))
  }

  isAuth(): boolean {
   return this.authService.isAuthenticated()
  }

  toggleLinks() {
    this.showLinks = !this.showLinks;
  }

  calculateTopPosition(): string {
    const buttonHeight = 40;
    const buttonPosition = document.querySelector('button')?.getBoundingClientRect();
    return buttonPosition ? `${buttonPosition.top + buttonHeight}px` : '0';
  }

  logOut(){
    this.authService.logout()
  }
}
