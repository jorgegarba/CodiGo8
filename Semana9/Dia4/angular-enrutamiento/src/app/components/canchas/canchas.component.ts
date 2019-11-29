import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanchasService } from './../../services/canchas.service';
import { iCancha } from 'src/app/interfaces/iCancha';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent implements OnInit, OnDestroy {

  cargado: boolean = false;
  listaCanchas: Array<iCancha> = [];

  // La inyección por dependencia es incluir a un servicio
  // en el constructor de un componente

  constructor(public _sCanchas: CanchasService) {

    console.log("Constructor");
    // Función que se ejecuta cuando un componente va a aparecer
    // Ejm > Ésta función debe ser utilizadad para inicializar 
    // variables por ejemplo.
  }
  ngOnInit() {
    console.log("ngOnInit");
    // Función que se ejecuta LUEGO de que el DOM del componente, se haya
    // cargado
    // Ejm >  Esta función debe ser usada para manipular elementos del DOM
    // porque si lo manipulamos en el constructor, se generará un error,
    // ya que en constructor, el DOM, aún no existe
    console.log("Llamando a las canchas");
    this._sCanchas.getCanchas().then((canchas: Array<iCancha>) => {
      this.listaCanchas = canchas;
      this.cargado = true;
    })
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    // Función que se ejecuta cuando un componente va a desaparecer del 
    // DOM actual
    // Ejm> Ésta función debe ser usada para limpiar la memoria ocupada por algunas variables.
    // cancelar eventos de subscripción, etc.
  }

}
