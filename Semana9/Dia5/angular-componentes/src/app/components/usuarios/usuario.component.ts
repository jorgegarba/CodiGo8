import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { iUsuario } from './../../interfaces/iUsuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() objUsuario: iUsuario;
  @Output() outUsuario: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  seleccionarUsuario(usu) {
    console.log("Seleccionar Usuario Usuario component");
    console.log(usu);
    this.outUsuario.emit(usu);
  }

}
