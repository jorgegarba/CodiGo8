import { Request, Response } from "express";

import { Proyecto } from './../config/sequelize';

export const getProyectos = (req: Request, res: Response) => {
  // findAll() => trae todos los registros del modelo Proyecto
  Proyecto.findAll().then((arregloProyectos: any) => {
    let rpta = {
      ok: true,
      content: arregloProyectos
    }
    res.json(rpta);
  })
}

export const postProyecto = (req: Request, res: Response) => {
  let { nombre, fecha_inicio, fecha_fin, presupuesto, estado } = req.body;
  let objProyecto = {
    pro_nom: nombre,
    pro_fechin: fecha_inicio,
    pro_fechfin: fecha_fin,
    pro_pres: presupuesto,
    pro_est: estado
  };
  // objProyecto => pro_nom,pro_fechin,pro_fechfin...
  Proyecto.build(objProyecto).save().then((proyectoCreado: any) => {
    res.status(201).json({
      ok: true,
      content: proyectoCreado
    })
  }).catch((error: any) => {
    res.status(500).json({
      ok: false,
      content: error
    })
  })
}

export const updateProyecto = (req: Request, res: Response) => {
  let { id_proyecto } = req.params;
  let { nombre, fecha_inicio, fecha_fin, presupuesto, estado } = req.body;
  let objProyecto = {
    pro_nom: nombre,
    pro_fechin: fecha_inicio,
    pro_fechfin: fecha_fin,
    pro_pres: presupuesto,
    pro_est: estado
  }
  Proyecto.update(objProyecto,
    {
      where: {
        pro_id: id_proyecto
      }
    }).then((proyectoActualizado: any) => {
      res.status(200).json({
        ok: true,
        content: proyectoActualizado
      })
    }).catch((error: any) => {
      res.status(500).json({
        ok: false,
        content: error.errors
      })
    })
};

export let deleteProyecto = (req: Request, res: Response) => {
  let { id_proyecto } = req.params;
  Proyecto.destroy({
    where: { pro_id: id_proyecto }
  }).then((proyectoEliminado: any) => {
    res.status(200).json({
      ok: true,
      content: proyectoEliminado
    })
  }).catch((error: any) => {
    res.status(500).json({
      ok: false,
      content: error.errors
    })
  })
};

export let getProyectobyId = (req: Request, res: Response) => {
  let { id_proyecto } = req.params;
  Proyecto.findByPk(id_proyecto).then((objProyecto: any) => {
    if (objProyecto) {
      res.status(200).json({
        ok: true,
        content: objProyecto
      })
    } else {
      res.status(404).json({
        ok: true,
        content: "No hay un projecto con ese ID"
      })
    }
  })
}