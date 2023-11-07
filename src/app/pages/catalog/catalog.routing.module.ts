import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
