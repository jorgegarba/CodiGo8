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
    let rpta = await t.commit();
    return rpta;
  } catch (error) {
    console.log("Error en la transacción");
    console.log(error);
    t.rollback();
    return error;
  }
}


export const postPresupuestos = (req: Request, res: Response) => {
  console.log(req.body);

  crearPrespuestos(req.body).then((rpta: any) => {
    console.log(rpta);
  })

}