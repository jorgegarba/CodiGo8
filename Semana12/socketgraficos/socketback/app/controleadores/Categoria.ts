import { Request, Response } from "express";
import { Categoria } from "../config/Sequelize";
import { Model } from "sequelize/types";

export class CategoriaController {
  public static getAll(req: Request, res: Response) {
    Categoria.findAll().then((arrayCategorias: Array<Model>) => {
      res.status(200).json({
        ok: true,
        content: arrayCategorias
      })
    })
  }
}