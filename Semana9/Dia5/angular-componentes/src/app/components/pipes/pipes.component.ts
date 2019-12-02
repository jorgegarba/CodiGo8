import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = "Jorge Luis";
  dias: Array<string> = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  PI: number = Math.PI;
  igv: number = 0.18;
  sueldo: number = 4500.00;
  hoy: Date = new Date();
  persona: any = {
    nombre:'Eduardo',
    apellido: 'De Rivero'
  }
  constructor() { }

  ngOnInit() {
  }

}
