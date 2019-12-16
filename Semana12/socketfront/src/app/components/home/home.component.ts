import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _sWebSocket: WebsocketService) { }

  ngOnInit() {
    this._sWebSocket.escucharProductos().subscribe((data) => {
      console.log(data);
    });
    this._sWebSocket.pedirProductos();
  }

  crearProducto(idProducto, nombreProducto) {
    let objProducto = {
      id: idProducto.value,
      nombre: nombreProducto.value
    }
    console.log(objProducto);
  }

}
