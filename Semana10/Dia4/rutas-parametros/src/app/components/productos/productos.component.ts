import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public _sRouter: Router) { }

  ngOnInit() {
  }

  verProducto(id) {
    this._sRouter.navigate(['/producto', `${id}`]);
  }
}
