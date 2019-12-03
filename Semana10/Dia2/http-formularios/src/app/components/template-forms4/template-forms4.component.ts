import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms4',
  templateUrl: './template-forms4.component.html',
  styleUrls: ['./template-forms4.component.css']
})
export class TemplateForms4Component implements OnInit {
  objPersona = {
    nombre: 'Jorge Garnica',
    edad: 0,
    email: 'jorgegarba@gmail.com',
    pais: 2
  }
  constructor() { }

  ngOnInit() {
  }
  registrar(formulario: NgForm) {
    if (formulario.valid) {
      console.log("Valor del formulario");
      console.log(formulario.value);
      console.log("Valor del objPersona");
      console.log(this.objPersona);
    }
  }
}
