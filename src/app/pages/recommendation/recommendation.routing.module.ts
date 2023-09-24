import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecommendationComponent} from "./recommendation.component";
import {AdViewComponent} from "../ad-view/ad-view.component";

const routes: Routes = [
  { path: '',
    component: RecommendationComponent
  },
  {
    path: 'ad-view',
    //Почему-то эта часть кода не хочет работать(
    // children:[
    //   {
    //     path: ':id',
    //     loadChildren:() => import('../ad-view/ad-view.module').then((m)=>m.AdViewModule)
    //   },
    //   {
    //     path: '',
    //     loadChildren:() => import('../ad-view/ad-view.module').then((m)=>m.AdViewModule)
    //   }
    // ]
    component: AdViewComponent // поэтому я написала пока так
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
