import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthorizationDialogComponent} from "../authorization-dialog/authorization-dialog.component";

@Injectable({providedIn: 'root'})

export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router,
    private matDialog: MatDialog
  ) {
  }

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return of(true)
    } else {
      this.router.navigate(['/main'], {
        queryParams: {
          loginAgain: true
        }
      })
        .then(() => {
          this.openDialog()
        })
      return of(false)
    }
  }

  openDialog() {
    this.matDialog.open(AuthorizationDialogComponent)
  }
}
