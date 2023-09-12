import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./layout/header/header.component";
import {CardComponent} from "./shered/card/card.component";
import {HttpClientModule} from "@angular/common/http";
import { TreeComponent } from './shered/categories-tree-view/tree.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AuthorizationComponent } from './shered/authorization/authorization.component';
// import { TemplatesComponent } from './templates/templates.component';
// import { LoginComponent } from './login/login.shered';
import {RouterOutlet} from "@angular/router";
// import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    TreeComponent,
    AuthorizationComponent,
    // TemplatesComponent,
    // CatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
