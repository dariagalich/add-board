import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AdCreateEditComponent} from "./ad-create-edit.component";
import {AdCreateEditRoutingModule} from "./ad-create-edit.routing.module";



@NgModule({
  declarations: [
    AdCreateEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdCreateEditRoutingModule
  ]
})
export class AdCreateEditModule { }
