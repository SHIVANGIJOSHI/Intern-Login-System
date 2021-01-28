import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { TokenService } from 'src/app/token.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,public tokenServe : TokenService) { }
  token = this.tokenServe.getToken();
  headers_object = new HttpHeaders().set("Authorization","Bearer" + this.token);
  httpOptions = {
    headers: this.headers_object
 };
  getInterns(){
    return this.http.get('http://127.0.0.1:8000/api/index',this.httpOptions);
  }
}

