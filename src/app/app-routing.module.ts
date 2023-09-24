import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'prefix',
  },
  {
    path: 'main',
    title: 'Главная',
    loadChildren: () =>
      import('./pages/recommendation/recommendation.module').then(m=>m.RecommendationModule)
  },
  // {path: 'ad-view',
  //   loadChildren: () =>
  //     import('./pages/ad-view/ad-view.module').then(m=>m.AdViewModule)
  // },
  {
    path: 'ad-create-edit',
    title: 'Создание объявления',
    loadChildren: () =>
      import('./pages/ad-create-edit/ad-create-edit.module').then(m=>m.AdCreateEditModule)
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
