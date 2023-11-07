import {Component, OnInit} from '@angular/core';
import {AuthorizationDialogComponent} from "../../../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../../../../services/users.service";
import {Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../interfaces";

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
  userId!: string

  constructor(
    private matDialog: MatDialog,
    public userService: UsersService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if (this.isAuth()) {
      this.setUserNameAndId()
    }
    this.authService.getUserNameObservable().subscribe(newUsername => {
      this.userName = newUsername;
    });
  }

  setUserNameAndId() {
    this.userService.getCurrentUser().subscribe((response: User) => {
      this.userName = response.name
      this.userId = response.id
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
