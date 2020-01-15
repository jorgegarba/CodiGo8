import { Request, Response } from 'express';
import { Recurso } from '../config/sequelize';

export const getRecursos = (req: Request, res: Response) => {
  Recurso.findAll().then((arrayRecursos: any) => {
    if (arrayRecursos) {
      res.status(200).json({
        ok: true,
        content: arrayRecursos
      })
    }
  })
}