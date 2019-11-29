import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  arregloCanchas: Array<any> = [
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
