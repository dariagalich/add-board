import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecommendationComponent} from "./recommendation.component";
import {RecommendationRoutingModule} from "./recommendation.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from "../../shared/product/product.component";
import {ProductsService} from "../../services/products.service";

@NgModule({
  declarations: [
    RecommendationComponent,
    ProductComponent,
  ],
  imports: [

    CommonModule,
    RecommendationRoutingModule,
    HttpClientModule
  ],
  exports: [
    ProductComponent,
  ],
  providers:[ProductsService]
})
export class RecommendationModule { }
