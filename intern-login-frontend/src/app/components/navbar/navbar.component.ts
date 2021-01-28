import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavbarService} from './navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service: NavbarService,private http : HttpClient) { }
  public intern;
  public checkLogin = false;
  ngOnInit(): void {
    this.service.getIntern().subscribe(
    data => this.handleData(data),
    error => this.handleError(error)
  );
  }
  handleData(data){
    console.log(data);
     this.intern = data;
     this.checkLogin = true;
     console.log(this.intern);
    }
  handleError(error){
    console.log(error);
  }
}
