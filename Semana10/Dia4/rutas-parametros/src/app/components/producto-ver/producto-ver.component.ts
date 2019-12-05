import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-producto-ver',
  templateUrl: './producto-ver.component.html',
  styleUrls: ['./producto-ver.component.css']
})
export class ProductoVerComponent implements OnInit {

  objProducto: any;

  constructor(public _sActivatedRoute: ActivatedRoute,
    public _sProducto: ProductoService) { }

  ngOnInit() {
    this.traerProducto(this._sActivatedRoute.snapshot.params.producto_id);
  }

  traerProducto(id) {
    this._sProducto.getProductoById(id)
      .subscribe((rpta: any) => {
        this.objProducto = rpta;
      }, (error: any) => {
        console.log(error);
      });

  }


}
