import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdViewRoutingModule} from "./ad-view.routing.module";
import {AdViewComponent} from "./ad-view.component";
import {MatIconModule} from "@angular/material/icon";
import {CommentsComponent} from "../../shared/comments/comments.component";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AdViewComponent,
    CommentsComponent
  ],
    imports: [
        CommonModule,
        AdViewRoutingModule,
        MatIconModule,
        FormsModule,
        MatProgressSpinnerModule,

    ],
  exports:[

  ]

})
export class AdViewModule { }
