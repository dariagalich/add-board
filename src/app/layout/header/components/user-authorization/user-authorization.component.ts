import { Component } from '@angular/core';
import {AuthorizationDialogComponent} from "../../../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent {

  constructor(private matDialog: MatDialog) {
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }

}
