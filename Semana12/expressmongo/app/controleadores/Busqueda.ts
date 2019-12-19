import { Request, Response } from 'express';
import { Usuario } from '../config/mongoose';


export let buscar = (req: Request, res: Response) => {

  // get /buscar/:coleccion/:termino

  let { termino, coleccion } = req.params;
  let regex = new RegExp(termino, 'i');

  let promesa;

  switch (coleccion) {
    case 'usuarios':
      promesa = buscarUsuarios(regex);
      break;
    default:
      res.status(400).json({
        ok: false,
        content: "No se ha especificado correctamente el nomnbre de la colección"
      });
      return;
  }

  promesa.then((recursos) => {
    res.status(200).json({
      ok: true,
      content: recursos
    })
  })


}

let buscarUsuarios = (regex: any) => {
  return new Promise((resolve, reject) => {
    Usuario.find()
      .or([
        { usu_nom: regex },
        { usu_ape: regex }
      ])
      .exec((error, usuarios) => {
        if (error) {
          reject(error);
        } else {
          resolve(usuarios);
        }
      })
  })
}

