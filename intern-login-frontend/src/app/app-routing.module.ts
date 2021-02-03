import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import{AuthGuard} from './auth.guard';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  { 
    path:'admin',
    component:AdminComponent,
    canActivate: [AuthGuard]
  },
  { 
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
