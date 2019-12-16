import { Producto } from "./Producto";

export class Productos {
  
  private listaProductos: Array<Producto> = [];

  agregarProducto(objProducto: Producto) {
    this.listaProductos.push(objProducto);
  }

  get productos() {
    return this.listaProductos;
  }

}
