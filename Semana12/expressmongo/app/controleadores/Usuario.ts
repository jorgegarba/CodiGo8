import { Usuario } from './../config/mongoose';
import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {

  Usuario.find((error, usuarios) => {
    if (error) {
      res.status(500).json({
        ok: false,
        content: "Error al traer los recursos"
      });
    } else {
      res.status(200).json({
        ok: true,
        content: usuarios
      })
    }
  })

  for (let i = 0; i < 100; i++) {
    let objUsuario = new Usuario(
      {
        "usu_nom": `nombre ${i}`,
        "usu_ape": `apellido ${i}`,
        "usu_salt": `jasbdjbdkajskdjnaskdjnaks`,
        "usu_hash": `asdasdasdfgwrertt`,
        "usu_fonos": [
          {
            "numero": `${(Math.random() * (999999999 - 900000000) + 900000000).toFixed(0).toString()}`,
            "operador": `operador ${i}`
          }
        ]
      }
    ).save((error, usuCreado) => {
      console.log("Creado");
    });
  }

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