import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import{NavbarService} from './components/navbar/navbar.service';
import{AdminService} from './components/admin/admin.service';
import{LoginService} from './components/login/login.service';
import{AuthGuard} from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import {TokenService} from './token.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminService,LoginService,AuthGuard,NavbarService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
