import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public interns:any;
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/login/index').subscribe(
      data => this.handleData(data)
    );
  }
  handleData(data){
    console.log(data);
    this.interns = data;
  }

}
