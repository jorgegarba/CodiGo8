import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() {
    console.log("usuarios service constructor")
  }

  getUsuarios() {
    return fetch("https://reqres.in/api/users");
  }
}
