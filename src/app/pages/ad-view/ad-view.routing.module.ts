import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdViewComponent} from "./ad-view.component";

const routes: Routes = [
  {
    path: '',
    component: AdViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdViewRoutingModule {
}
