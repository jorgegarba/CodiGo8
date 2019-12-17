import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  conectado: boolean = false;

  constructor(private _sSocket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this._sSocket.on('connect', () => {
      console.log('Socket conectado');
      this.conectado = true;
    });

    this._sSocket.on('disconnect', () => {
      console.log('Socket desconectado');
      this.conectado = false;
    });
  }


}
