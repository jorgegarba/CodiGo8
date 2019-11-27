import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productos: Array<Object> = [
    { "id": "1", "nombre": "Gamer Pad", "codigo": "45433", "cantidad": 80, "precio": 400, "imagen": "http://placehold.it/300x300" },
    { "id": "2", "nombre": "nombre 2", "codigo": "codigo 2", "cantidad": 63, "precio": 31, "imagen": "http://placehold.it/300x300" },
    { "id": "3", "nombre": "nombre 3", "codigo": "codigo 3", "cantidad": 12, "precio": 82, "imagen": "http://placehold.it/300x300" },
    { "id": "4", "nombre": "nombre 4", "codigo": "codigo 4", "cantidad": 57, "precio": 44, "imagen": "http://placehold.it/300x300" },
    { "id": "5", "nombre": "nombre 5", "codigo": "codigo 5", "cantidad": 18, "precio": 94, "imagen": "http://placehold.it/300x300" },
    { "id": "6", "nombre": "nombre 6", "codigo": "codigo 6", "cantidad": 38, "precio": 34, "imagen": "http://placehold.it/300x300" },
    { "id": "7", "nombre": "nombre 7", "codigo": "codigo 7", "cantidad": 6, "precio": 98, "imagen": "http://placehold.it/300x300" },
    { "id": "8", "nombre": "nombre 8", "codigo": "codigo 8", "cantidad": 54, "precio": 15, "imagen": "http://placehold.it/300x300" },
    { "id": "9", "nombre": "nombre 9", "codigo": "codigo 9", "cantidad": 38, "precio": 7, "imagen": "http://placehold.it/300x300" },
    { "id": "10", "nombre": "nombre 10", "codigo": "codigo 10", "cantidad": 55, "precio": 22, "imagen": "http://placehold.it/300x300" },
    { "id": "11", "nombre": "nombre 11", "codigo": "codigo 11", "cantidad": 83, "precio": 58, "imagen": "http://placehold.it/300x300" },
    { "id": "12", "nombre": "nombre 12", "codigo": "codigo 12", "cantidad": 26, "precio": 59, "imagen": "http://placehold.it/300x300" },
    { "id": "13", "nombre": "nombre 13", "codigo": "codigo 13", "cantidad": 63, "precio": 63, "imagen": "http://placehold.it/300x300" },
    { "id": "14", "nombre": "nombre 14", "codigo": "codigo 14", "cantidad": 74, "precio": 73, "imagen": "http://placehold.it/300x300" }]

  constructor() { }

  ngOnInit() {
  }

}







