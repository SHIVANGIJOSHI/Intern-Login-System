import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component'
import {AdminComponent} from './components/admin/admin.component';
import {LoginComponent} from './components/login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intern-login-frontend';
}
