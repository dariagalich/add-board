import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdViewRoutingModule} from "./ad-view.routing.module";
import {AdViewComponent} from "./ad-view.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AdViewComponent
  ],
    imports: [
        CommonModule,
        AdViewRoutingModule,
        MatIconModule
    ]

})
export class AdViewModule { }
