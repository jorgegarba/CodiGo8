import { PresupuestoProyecto, conexion } from './../config/sequelize';
import { Response } from 'express';
import { Request } from 'express';


let crearPrespuestos = async (arrPrespuestos: Array<any>) => {
  // Creando el objeto para la 'transaction'
  const t = await conexion.transaction();
  try {
    for (let i = 0; i < arrPrespuestos.length; i++) {
      await PresupuestoProyecto.create(arrPrespuestos[i],
        { transaction: t });
    }
    await t.commit();
    return true;
  } catch (error) {
    console.log("Error en la transacción");
    console.log(error);
    t.rollback();
    throw error;
  }
}


export const postPresupuestos = (req: Request, res: Response) => {
  console.log(req.body);

  crearPrespuestos(req.body).then((rpta: any) => {
    res.status(201).json({
      ok: true,
      content: 'Presupuestos creados de manera exitosa'
    })
  }).catch((error) => {
    res.status(500).json({
      ok: false,
      content: error,
      message: ' Ocurrió un error en la creación'
    })
  })

}

export const getPresupuestoByProId = (req: Request, res: Response) => {
  // Retornar un arreglo de Presupuestos 
  // que le pertenezcan al proyecto con 'pro_id' recibido en el req.params
  
  // A tomar en cuenta, cada objeto Presupuesto, debe incluir la informacion
  // de los modelo UnidadMedida y Recurso
}