import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderRoutingModule} from "./header.routing.module";
import {TreeComponent} from "../../shared/categories-tree-view/tree.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthorizationComponent} from "../../shared/authorization/authorization.component";
import {MatDialogModule} from "@angular/material/dialog";
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    TreeComponent,
    AuthorizationComponent,
    UserAuthorizationComponent,
    SearchBarComponent
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
        ReactiveFormsModule

    ],
  exports: [
    TreeComponent,
    UserAuthorizationComponent,
    SearchBarComponent,
  ]
})
export class HeaderModule { }
