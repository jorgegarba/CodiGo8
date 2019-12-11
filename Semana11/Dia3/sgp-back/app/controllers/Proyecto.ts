import { Request, Response } from "express";

import { Proyecto } from './../config/sequelize';

export const getUsuarios = (req: Request, res: Response) => {
  // findAll() => trae todos los registros del modelo Proyecto
  Proyecto.findAll().then((arregloProyectos: any) => {
    let rpta = {
      ok: true,
      content: arregloProyectos
    }
    res.json(rpta);
  })
}