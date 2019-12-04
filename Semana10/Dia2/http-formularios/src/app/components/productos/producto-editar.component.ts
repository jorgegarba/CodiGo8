import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
  }

}
