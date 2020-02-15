import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { bounceAnimation } from '../animation/animated-router-outlet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [bounceAnimation]
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) {
   }

  ngOnInit() {

  }

}
