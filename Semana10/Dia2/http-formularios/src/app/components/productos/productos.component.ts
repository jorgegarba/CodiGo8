import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;
  productos: Array<any> = [];
  cargado = false;
  constructor(public _sProductos: ProductosService) { }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos() {
    this.subscriptor = this._sProductos.getProductos().subscribe((data: any) => {
      this.productos = data;
      this.cargado = true;
    }, (error: any) => {

    });
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }
}
