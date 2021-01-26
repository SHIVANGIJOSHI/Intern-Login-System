import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient,public service: AdminService) { }
  public interns;
  ngOnInit(): void {
    this.service.getInterns().subscribe(
    data => this.handleData(data)
  );
  }
  handleData(data){
    console.log(data);
     this.interns = data;
     console.log(this.interns);
    }

}
