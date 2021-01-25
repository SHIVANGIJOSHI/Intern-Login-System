import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public login = false;
  public admin = false;
  changeLogin(){
    this.admin = false;
    this.login = true;
  }
  changeAdmin(){
    this.login = false;
    this.admin = true;
  }
  change(){
    this.admin = false;
    this.login = false;
  }

}
