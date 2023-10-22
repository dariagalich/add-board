import {Component} from '@angular/core';
import {AuthorizationDialogComponent} from "../../../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent {

  constructor(
    private matDialog: MatDialog,
    // private http: HttpHeaders
  ) {
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }

  // isUserAuthorized():boolean {
  //   if (this.http.has('Authorization')){
  //     return true
  //   }
  //   else return false
  // }


}
