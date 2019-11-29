import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  miCard = {
    boxShadow: ' 2px 2px 10px #ccc',
    borderRadius: '20px'
  }
  rojo: string = "#ff0000";
  constructor() { }

  ngOnInit() {
  }

}
