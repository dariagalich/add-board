import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizedUserRoutingModule} from "./authorized-user.routing.module";
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {UserAdsComponent} from "./pages/user-ads/user-ads.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AuthorizedUserComponent } from './authorized-user.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CatalogModule} from "../pages/catalog/catalog.module";





@NgModule({
  declarations: [
    CreateAdComponent,
    EditAdComponent,
    UserProfileComponent,
    UserAdsComponent,
    AuthorizedUserComponent
  ],
  imports: [
    CommonModule,
    AuthorizedUserRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    CatalogModule,
  ]
})
export class AuthorizedUserModule { }
