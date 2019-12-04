import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Subscription } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';

// declarando la variable $ como simbolo de JQuery
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;
  productos: Array<any> = [];
  cargado = false;
  a:string = "haplen";

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

  abrirModalCrearProducto() {
    $("#modalCrearProducto").modal("show");
  }

  crearProducto(formularioCrear: NgForm) {
    if (formularioCrear.valid) {
      this._sProductos.postProducto(formularioCrear.value)
        .subscribe((producto: any) => {
          if (producto.id) {
            this.cancelar(formularioCrear);
            this.cargado = false;
            this.traerProductos();
          }
        }, (error: any) => {
          console.log(error);
        });
    }
  }
  cancelar(formularioCrear: NgForm) {
    formularioCrear.reset();
    $("#modalCrearProducto").modal("hide");
  }
}
