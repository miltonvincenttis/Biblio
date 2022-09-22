import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiteraturasListComponent } from './componentes/literaturas/literaturas-list/literaturas-list.component';
import { SplashComponent } from './componentes/literaturas/splash/splash.component';
import { InclusaoLiteraturaComponent } from './componentes/inclusao-literatura/inclusao-literatura.component';
import { FormsModule } from '@angular/forms';
import { AlteracaoLiteraturaComponent } from './componentes/alteracao-literatura/alteracao-literatura.component';
import { ExclusaoLiteraturaComponent } from './componentes/exclusao-literatura/exclusao-literatura.component';
import { EntradaLiteraturaComponent } from './componentes/entrada-literatura/entrada-literatura.component';
import { SaidaLiteraturaComponent } from './componentes/saida-literatura/saida-literatura.component';

@NgModule({
  declarations: [
    AppComponent,
    LiteraturasListComponent,
    SplashComponent,
    InclusaoLiteraturaComponent,
    AlteracaoLiteraturaComponent,
    ExclusaoLiteraturaComponent,
    EntradaLiteraturaComponent,
    SaidaLiteraturaComponent,
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
