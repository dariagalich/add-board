import {Component, OnInit} from '@angular/core';
import {AuthorizationDialogComponent} from "../../../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../../../../services/users.service";
import {Observable} from "rxjs";
import {Properties22} from "../../../../api.interface";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent implements OnInit {

  public user$!: Observable<string>;
  showLinks: boolean = false;
  userName: string = ''
  isAuthenticated: boolean = false;

  constructor(
    private matDialog: MatDialog,
    public userService: UsersService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if (this.isAuth()) {
      this.setUserName()
    }
    this.authService.getUserNameObservable().subscribe(newUsername => {
      this.userName = newUsername;
    });
  }

  setUserName() {
    this.userService.getCurrentUser().subscribe((response: Properties22) => {
        this.userName = response.name
    })
  }


  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }


  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }

  toggleLinks() {
    this.showLinks = !this.showLinks;
  }

  logOut() {
    this.authService.logout()
  }
}
