import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderRoutingModule} from "./header.routing.module";
import {CategoriesTreeComponent} from "../../shared/categories-tree/categories-tree.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthorizationDialogComponent} from "../../shared/authorization-dialog/authorization-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RegistrationComponent} from "../../shared/registration/registration.component";
import {TokenInterceptor} from "../../shared/classes/token.interceptor";


@NgModule({
  declarations: [
    CategoriesTreeComponent,
    AuthorizationDialogComponent,
    UserAuthorizationComponent,
    SearchBarComponent,
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        MatCheckboxModule,
        ReactiveFormsModule,

    ],
  exports: [
    CategoriesTreeComponent,
    UserAuthorizationComponent,
    SearchBarComponent,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ]
})
export class HeaderModule { }
