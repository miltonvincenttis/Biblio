import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LiteraturasListComponent } from './componentes/literaturas/literaturas-list/literaturas-list.component';
import { SplashComponent } from './componentes/literaturas/splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'literaturas-list',
    component: LiteraturasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
