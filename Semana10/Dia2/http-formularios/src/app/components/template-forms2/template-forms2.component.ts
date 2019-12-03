import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms2',
  templateUrl: './template-forms2.component.html',
  styleUrls: ['./template-forms2.component.css']
})
export class TemplateForms2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registrar(formulario: NgForm) {
    if (formulario.valid) {
      console.log(formulario.value);
    }
  }

}
