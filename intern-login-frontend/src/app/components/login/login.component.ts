import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { TokenService } from 'src/app/token.service';
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
  constructor(private http: HttpClient,public service: LoginService,private router : Router,public token : TokenService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.intern);
    return this.service.postAuthentication(this.intern).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }
  handleData(data){
    console.log(data);
    this.data = data.data;
    this.checkError = false;
    this.checkData = true;
    this.token.handleToken(data.token);
    this.service.logIn = true;
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },4000);
    
    
  }
  handleError(error){
    console.log(error);
    this.error = error.error.error;
    this.checkData = false;
    this.checkError = true;
  }
}
