import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdsRoutingModule } from './user-ads-routing.module';
import {UserAdsComponent} from "./user-ads.component";
import {ProductComponent} from "../../shared/product/product.component";
import {CatalogModule} from "../catalog/catalog.module";

@NgModule({
  declarations: [
    UserAdsComponent,

  ],
  imports: [
    CommonModule,
    UserAdsRoutingModule,
    CatalogModule
  ],
  exports: [
    ProductComponent
  ]
})
export class UserAdsModule { }
