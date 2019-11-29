import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
