import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  cargado: boolean = false;
  listaUsuarios: Array<any>;

  constructor(public _sUsuarios: UsuariosService) {
    console.log("constructor");

  }

  ngOnInit() {
    this._sUsuarios.getUsuarios().then((response) => {
      return response.json();
    }).then((data: any) => {
      console.log(data);
    })
  }

}
