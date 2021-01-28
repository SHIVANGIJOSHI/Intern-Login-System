import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  postAuthentication(intern){
    return this.http.post('http://127.0.0.1:8000/api/login',intern);
  }
  loggedIn = false;
  get logIn(){
    return this.loggedIn;
  }
  set logIn(value){
    this.loggedIn = value;
  }
}
