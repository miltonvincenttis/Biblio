import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlteracaoLiteraturaComponent } from './componentes/alteracao-literatura/alteracao-literatura.component';
import { EntradaLiteraturaComponent } from './componentes/entrada-literatura/entrada-literatura.component';
import { ExclusaoLiteraturaComponent } from './componentes/exclusao-literatura/exclusao-literatura.component';
import { InclusaoLiteraturaComponent } from './componentes/inclusao-literatura/inclusao-literatura.component';
import { LiteraturasListComponent } from './componentes/literaturas/literaturas-list/literaturas-list.component';
import { SplashComponent } from './componentes/literaturas/splash/splash.component';
import { SaidaLiteraturaComponent } from './componentes/saida-literatura/saida-literatura.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'literaturas-list',
    component: LiteraturasListComponent
  },
  {
    path: 'inclusao-literatura',
    component: InclusaoLiteraturaComponent
  },
  {
    path: 'alteracao-literatura/:id',
    component: AlteracaoLiteraturaComponent
  },
  {
    path: 'exclusao-literatura/:id',
    component: ExclusaoLiteraturaComponent
  },
  {
    path: 'entrada-literatura/:id',
    component: EntradaLiteraturaComponent
  },  
  {
    path: 'saida-literatura/:id',
    component: SaidaLiteraturaComponent
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
