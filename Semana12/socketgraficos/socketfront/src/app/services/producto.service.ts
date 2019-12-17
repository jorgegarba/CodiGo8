import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _sHttp: HttpClient) { }

  crearProducto(objProducto) {

    let misHeaders = new HttpHeaders();
    misHeaders.append("Content-type", "application/json");

    return this._sHttp.post("http://localhost:3000/producto",
      objProducto,
      { headers: misHeaders });
  }

  getPPCategoria() {
    return this._sHttp.get('http://localhost:3000/reportes/ppcategoria');
  }

}
