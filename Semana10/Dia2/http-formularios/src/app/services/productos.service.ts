import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public abrir = false;
  public productoEditar = {
    cantidad: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    codigo: '',
    id: 0
  };

  URL_BACKEND = env.URL_BACKEND;

  constructor(public _sHttp: HttpClient) { }

  getProductos() {
    let url = `${this.URL_BACKEND}/producto`;
    return this._sHttp.get(url);
  }

  postProducto(objProducto: { imagen: string, precio: number, cantidad: number, nombre: string, codigo: string }) {
    let url = `${this.URL_BACKEND}/producto`;
    let misHeaders = new HttpHeaders();
    misHeaders.append("Content-Type", "application/json");
    return this._sHttp.post(url, objProducto, { headers: misHeaders });
  }

  putProducto(objProducto, id) {
    let url = `${this.URL_BACKEND}/producto/${id}`;
    let misHeaders = new HttpHeaders();
    misHeaders.append('Content-Type', 'application/json');
    return this._sHttp.put(url, objProducto, { headers: misHeaders });
  }

}
