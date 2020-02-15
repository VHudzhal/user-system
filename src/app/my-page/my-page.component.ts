import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { bounceAnimation } from '../animation/animated-router-outlet';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  animations: [bounceAnimation]
})
export class MyPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
