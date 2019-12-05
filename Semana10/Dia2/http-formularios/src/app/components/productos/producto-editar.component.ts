import { ProductosService } from './../../services/productos.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  constructor(public _sProductos: ProductosService) { }

  @Output() productoEditado = new EventEmitter<any>();

  ngOnInit() {
  }
  editarProducto(formularioEditar: NgForm) {
    if (formularioEditar.valid) {
      Swal.fire({
        title: 'Editando...',
        text: 'Estamos guardando los cambios',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false
      });

      let id = this._sProductos.productoEditar.id;
      this._sProductos.putProducto(formularioEditar.value, id)
        .subscribe((rpta: any) => {
          this._sProductos.abrir = false;
          formularioEditar.reset();
          Swal.fire({
            title: 'Editado!',
            text: 'El producto fue editado exitosamente!',
            icon: 'success',
          });
          this.productoEditado.emit();
        }, (error: any) => {
          console.log(error);
        });
    }
  }

}
