import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL_BACKEND = env.URL_BACKEND;

  constructor(public _sHttp: HttpClient) { }

  getProductos() {
    let url = `${this.URL_BACKEND}/producto`;
    return this._sHttp.get(url);
  }

}
