import { Component, OnInit, Input } from '@angular/core';

import { iUsuario } from './../../interfaces/iUsuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() objUsuario: iUsuario;

  constructor() { }

  ngOnInit() {
  }

}
