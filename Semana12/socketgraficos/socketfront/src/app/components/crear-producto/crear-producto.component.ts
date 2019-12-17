import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styles: []
})
export class CrearProductoComponent implements OnInit {

  categorias;
  cat_id = 100;
  public exampleData: Array<Select2OptionData>;
  constructor(public _sCategoria: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this._sCategoria.getCategorias().subscribe((data: any) => {
      if (data.ok) {
        this.categorias = data.content;
        let tmp = [];
        tmp.push({
          id: 100,
          text: "Seleccione..."
        });
        this.categorias.forEach((cat) => {
          let objCategoria = {
            id: cat.cat_id,
            text: cat.cat_desc
          };
          tmp.push(objCategoria);
        });
        this.exampleData = tmp;
      }
    });
  }

  cambiarSelect(evento) {
    this.cat_id = evento;
  }

  crearProducto(formulario: NgForm) {
    let objProducto = {
      ...formulario.value,
      cat_id: this.cat_id
    }
    console.log(objProducto);
  }

}
