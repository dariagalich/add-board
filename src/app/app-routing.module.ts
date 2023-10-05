import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./pages/ad-create-edit/ad-create-edit.module').then(m=>m.AdCreateEditModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m=>m.AdminModule)
  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
