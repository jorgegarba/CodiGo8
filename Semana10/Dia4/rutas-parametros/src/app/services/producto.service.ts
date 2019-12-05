import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public _sHttp: HttpClient) { }

  getProductoById(id) {
    let url = `https://5dc194f36ca10a0014d5d95d.mockapi.io/producto/${id}`;
    return this._sHttp.get(url);
  }
}
