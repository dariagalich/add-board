import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./layout/header/header.component";
import {RouterOutlet} from "@angular/router";
import {HeaderModule} from "./layout/header/header.module";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        MatButtonModule,
        HeaderModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        }
    ],
    exports: [
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
