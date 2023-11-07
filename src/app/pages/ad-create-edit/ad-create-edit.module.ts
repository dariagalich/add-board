import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdCreateEditComponent} from "./ad-create-edit.component";
import {AdCreateEditRoutingModule} from "./ad-create-edit.routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AdCreateEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdCreateEditRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
  ]
})
export class AdCreateEditModule {
}
