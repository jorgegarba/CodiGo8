import { Request, Response } from "express";
import { Producto, Categoria } from "../config/Sequelize";
import { Model } from "sequelize/types";

export class ProductoController {
  public static crearProducto(req: Request, res: Response) {
    let objProducto = Producto.build(req.body);
    objProducto.save().then((objProductoCreado: Model) => {
      res.status(201).json({
        ok: true,
        content: objProductoCreado
      });
      // EMITIR un evento via socketIO que comunique la nueva
      // data a los clientes
    })
  }

  public static getProductosPorCategoria() {
    Categoria.findAll({
      include: [
        { model: Producto }
      ]
    }).then((data: any) => {
      let arregloCategorias: Array<string> = [];
      let arregloPPCategoria: Array<number> = [];
      data.forEach((objCategoria: any) => {
        arregloCategorias.push(objCategoria.cat_desc);
        arregloPPCategoria.push(objCategoria.productos.length);
      });
      let rpta = {
        categorias: arregloCategorias,
        ppcategoria: arregloPPCategoria
      }
      console.log(rpta);
    })
  }
}