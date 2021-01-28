import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavbarService} from './navbar.service';
import { TokenService } from 'src/app/token.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service: NavbarService,private http : HttpClient,public tokenServe : TokenService,private router : Router) { }
  public intern;
  
  ngOnInit(): void {
    if(this.tokenServe.isValidToken()){
      this.router.navigate(['/home']);
      this.service.getIntern().subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
      );
   }
   else{
     this.router.navigate(['/login']);
   }

  }
  handleData(data){
    console.log(data);
     this.intern = data;
     console.log(this.intern);
    }
  handleError(error){
    console.log(error);
  }
  onLogOut(){
    this.tokenServe.removeToken();
  }
  checkLogin(){
    return this.tokenServe.isLoggedIn();
  }
}
