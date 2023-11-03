import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from "./user-profile.component";
import {UserProfileRoutingModule} from "./user-profile-routing.module";
// import {ProductComponent} from "../../shared/product/product.component";
import {CatalogModule} from "../catalog/catalog.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    CatalogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    // ProductComponent
  ]
})
export class UserProfileModule { }
