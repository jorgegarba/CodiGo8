import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;
  constructor(public _sActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // imprimir el parametro que viene por la ruta
    this.subscriptor = this._sActivatedRoute.params
      .subscribe((parametros: Params) => {
        console.log(parametros.producto_id);
      });
  }
  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }




}
