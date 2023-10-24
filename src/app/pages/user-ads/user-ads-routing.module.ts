import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAdsComponent} from "./user-ads.component";

const routes: Routes = [
  {
    path: '',
    component: UserAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdsRoutingModule { }
