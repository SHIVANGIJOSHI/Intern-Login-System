import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';
import { TokenService } from 'src/app/token.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public intern ={
    First_name: '',
    Last_name: '',
    username: '',
    password: ''
  };
  public checkError = false;
  public error = null;
  public checkData = false;
  public data = null;
  constructor(private http: HttpClient,public service: RegistrationService,private router : Router,public token : TokenService) { }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.intern);
    return this.service.postCreation(this.intern).subscribe(
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
    setTimeout(()=>{
      this.router.navigate(['home']);
    },4000);
  }
  handleError(error){
    console.log(error);
    this.error = error.error.error;
    this.checkData = false;
    this.checkError = true;
  }
}

