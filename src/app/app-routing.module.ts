import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {

    path: 'main',
    title: 'Главная',
    loadChildren: () =>
      import('./pages/catalog/catalog.module').then(m=>m.CatalogModule)
  },
  {
    path: 'ad-view/:id',
    title:'Объявление',
    loadChildren: () =>
      import('./pages/ad-view/ad-view.module').then(m=>m.AdViewModule)
  },
  {
    path: 'ad-create-edit',
    title: 'Создание объявления',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/ad-create-edit/ad-create-edit.module').then(m=>m.AdCreateEditModule)
  },
  {
    path: 'authorized-user',
    loadChildren: () =>
      import('./authorized-user/authorized-user.module').then(m=>m.AuthorizedUserModule)
  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
