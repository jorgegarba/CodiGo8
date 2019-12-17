import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public _sHttp: HttpClient) { }

  getCategorias() {
    return this._sHttp.get('http://localhost:3000/categoria');
  }

}