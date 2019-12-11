import { Familia } from './../config/sequelize';
import { Response } from 'express';
import { Request } from 'express';

import { Model } from 'sequelize/types';

export const postFamilia = (req: Request, res: Response) => {
  let objFamilia = Familia.build(req.body);
  objFamilia.save().then((objFamiliaC: Model) => {
    if (objFamiliaC) {
      res.status(201).json({
        ok: true,
        content: objFamiliaC
      });
    } else {
      res.status(204).json({
        ok: false,
        content: "No se pudo crear el recurso"
      });
    }
  }).catch((error: any) => {
    res.status(500).json({
      ok: false,
      content: error
    })
  })
}