import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public intern ={
    username: '',
    password: ''
  };
  public checkError = false;
  public error = null;
  public checkData = false;
  public data = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.intern);
    return this.http.post('http://127.0.0.1:8000/api/login/authenticate',this.intern).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }
  handleData(data){
    console.log(data);
    this.data = data.data;
    this.checkError = false;
    this.checkData = true;
  }
  handleError(error){
    console.log(error);
    this.error = error.error.error;
    this.checkData = false;
    this.checkError = true;
  }

}
