import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formulario1(pais, edad, nombre, email) {
    console.log(pais.value);
    console.log(edad.value);
    console.log(nombre.value);
    console.log(email.value);
  }

}
