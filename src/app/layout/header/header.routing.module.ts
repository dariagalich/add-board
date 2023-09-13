import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdCreateEditComponent} from "../../ad-create-edit/ad-create-edit.component";

const routes: Routes = [
  { path: 'ad-create',
    component: AdCreateEditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
