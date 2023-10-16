import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./layout/header/header.component";
import {RouterOutlet} from "@angular/router";
import {HeaderModule} from "./layout/header/header.module";
import {MatButtonModule} from "@angular/material/button";
import {RegistrSuccessComponent} from './shared/registr-success/registr-success.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./shared/classes/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatButtonModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
