import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiteraturasListComponent } from './componentes/literaturas/literaturas-list/literaturas-list.component';
import { SplashComponent } from './componentes/literaturas/splash/splash.component';
import { InclusaoLiteraturaComponent } from './componentes/inclusao-literatura/inclusao-literatura.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LiteraturasListComponent,
    SplashComponent,
    InclusaoLiteraturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
