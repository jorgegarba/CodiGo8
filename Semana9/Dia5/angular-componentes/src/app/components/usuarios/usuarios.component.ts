import { iUsuario } from './../../interfaces/iUsuario';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  cargado: boolean = false;
  listaUsuarios: Array<iUsuario>;
  usuarioSeleccionado: any;

  constructor(public _sUsuarios: UsuariosService) { }

  ngOnInit() {
    this._sUsuarios.getUsuarios().then((response: any) => {
      return response.json();
    }).then((json: any) => {
      console.log(json.data);
      this.listaUsuarios = json.data;
    });
  }
  recibirUsuario(usuarioEntrada) {
    this.usuarioSeleccionado = usuarioEntrada;
  }

}
