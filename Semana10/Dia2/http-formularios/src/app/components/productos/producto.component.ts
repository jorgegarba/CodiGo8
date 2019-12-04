import { ProductosService } from './../../services/productos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() objProducto;
  constructor(public _sProducto: ProductosService) { }

  ngOnInit() {
  }

  cambiarServicioAbrir(objProducto) {
    this._sProducto.abrir = true;
    this._sProducto.productoEditar = objProducto;
  }
}


