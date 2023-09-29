import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdViewRoutingModule} from "./ad-view.routing.module";
import {AdViewComponent} from "./ad-view.component";


@NgModule({
  declarations: [
    AdViewComponent
  ],
  imports: [
    CommonModule,
    AdViewRoutingModule
  ]

})
export class AdViewModule { }
