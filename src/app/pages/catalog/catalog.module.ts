import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from "../../shared/product/product.component";
import {ProductsService} from "../../services/products.service";

@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    HttpClientModule
  ],
  exports: [
    ProductComponent
  ],
  providers:[ProductsService]
})
export class CatalogModule {}
