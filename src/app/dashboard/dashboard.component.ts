import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get('http://localhost:3001').subscribe(data => {
      console.log(data)
    })

  }

}
