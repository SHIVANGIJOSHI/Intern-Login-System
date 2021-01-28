import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private issuer = {
    login: 'http://127.0.0.1:8000/api/login'
  }

  constructor() { }
  handleToken(token){
    localStorage.setItem('token',token);
    console.log(token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isValidToken(){
    const token = this.getToken();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true: false;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  payload(token){
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  isLoggedIn(){
    return this.isValidToken();
  }
  removeToken(){
    localStorage.removeItem('token');
  }
}
