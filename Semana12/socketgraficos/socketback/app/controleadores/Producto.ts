import { Request, Response } from "express";
import { Producto } from "../config/Sequelize";
import { Model } from "sequelize/types";

export class ProductoController {
  public static crearProducto(req: Request, res: Response) {
    let objProducto = Producto.build(req.body);
    objProducto.save().then((objProductoCreado: Model) => {
      res.status(201).json({
        ok: true,
        content: objProductoCreado
      });
    })
  }
}