import { Categoria, Familia } from './../config/sequelize';
import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
// categoria controller

export const postCategoria = (req: Request, res: Response) => {

  let objCategoria = Categoria.build(req.body);
  Familia.findByPk(req.body.fam_id).then((objFamilia: Model) => {
    if (objFamilia) {
      return objCategoria.save();
    } else {
      res.status(204).json({
        ok: false,
        content: `La familia de id ${req.body.fam_id} no existe en la BD`
      });
    }
  }).then((objCategoriaC: Model) => {
    if (objCategoriaC) {
      res.status(201).json({
        ok: true,
        content: objCategoriaC
      });
    }
  }).catch((error: any) => {
    res.status(500).json({
      ok: false,
      content: "Error",
      error: error
    });
  })


}