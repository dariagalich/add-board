import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog.component";
import {AdViewComponent} from "../ad-view/ad-view.component";

const routes: Routes = [
  { path: '',
    component: CatalogComponent
  },
  {
    path: 'ad-view',
    component: AdViewComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
