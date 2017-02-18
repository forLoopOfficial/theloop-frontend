import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {Angular2TokenService} from "angular2-token/angular2-token";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
