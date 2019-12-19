import { Usuario } from './../config/mongoose';
import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {

  let { desde } = req.query;
  desde = +desde;

  if (isNaN(desde)) {
    // no es un numero o no llegó el parámetro
    desde = 0;
  }

  Usuario.count({}, (error, count) => {

    Usuario.find().skip(desde).limit(10).exec((error, usuarios) => {
      if (error) {
        res.status(500).json({
          ok: false,
          content: "Error al traer los recursos"
        });
      } else {
        res.status(200).json({
          ok: true,
          content: {
            pagina: desde == 0 ? 1 : desde / 10,
            por_pagina: 10,
            total: count,
            total_paginas: Math.ceil(count / 10),
            data: usuarios
          }
        });
      }
    })

  })



}

export const post = (req: Request, res: Response) => {
  let objUsuario = new Usuario(req.body);
  objUsuario.save((error, usuCreado) => {
    if (error) {
      res.status(500).json({
        ok: false,
        content: "Error al crear el Usuario"
      });
    } else {
      res.status(201).json({
        ok: true,
        content: usuCreado
      })
    }
  })
}