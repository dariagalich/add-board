import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserAdsComponent} from "./pages/user-ads/user-ads.component";
import {EditAdComponent} from "./components/edit-ad/edit-ad.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";




const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthorizedUserComponent,
  // },

  {path: 'user-ads', component: UserAdsComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-ads/:id/edit', component: EditAdComponent}


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedUserRoutingModule { }
