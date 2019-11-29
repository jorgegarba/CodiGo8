import { Injectable } from '@angular/core';
import { iCancha } from '../interfaces/iCancha';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  arregloCanchas: Array<iCancha> = [
    { id: 1, nombre: 'Jarawa', direccion: 'Av. Dolores' },
    { id: 2, nombre: 'Bola 8', direccion: 'Av. Parra' }
  ];

  constructor() {
    console.log("constructor del servicio de canchas");
  }

  getCanchas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.arregloCanchas);
      }, 1500);
    })
  }


}
