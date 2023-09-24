import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdCreateEditComponent} from "./ad-create-edit.component";


const routes: Routes = [
  {
    path: '',
    component: AdCreateEditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdCreateEditRoutingModule { }
