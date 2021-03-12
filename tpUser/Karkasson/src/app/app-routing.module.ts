import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent },
  // {path: 'about', component: LoginPageComponent, data: {
  //     page: 'about'
  //   }},
  // {path: 'contact', component: LoginPageComponent, data: {
  //     page: 'contact'
  //   }},
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
