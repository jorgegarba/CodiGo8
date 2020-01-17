import { PresupuestoProyecto, conexion, UnidadMedida, Recurso } from './../config/sequelize';
import { Response } from 'express';
import { Request } from 'express';


// let registrarGasto = async (objDocumento, objGastoIngreso, arrDocumentoDetalle) => {

  /**
   * 0. Crear el objeto transacshon
   * 0> ejemplo
   *    const t = await conexion.transaction();
   * 1. Crear el objDocumento
   * 1.ejemplo> 
   *  let documentoCreado = await Documento.create(objDocumento,{ transaction: t })
   * 2. Coger el id del objDocumento creado con un await
   * let doc_id = documentoCreado.doc_id
   *  3. al objGastoIngreso, agregarle el doc_id
   * 3 ejemplo>
   *  objGastoIngreso.doc_id = doc_id;
   * 4. Crear el GastoIngreso
   * 5. Con un for hacer algo parecido a lo siguiente
   * for (let i = 0; i < arrDocumentoDetalle.length; i++) {
   *  arrDocmentoDetalle[i].doc_id = doc_id;
      await DocumentoDetalle.create(arrDocumentoDetalle[i],
        { transaction: t });
    }
   */

// }

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
  let { pro_id } = req.params;
  PresupuestoProyecto.findAll({
    where: {
      pro_id: pro_id
    },
    include: [
      { model: UnidadMedida },
      { model: Recurso }
    ]
  }).then((presupuestos: any) => {
    if (presupuestos) {
      res.status(200).json({
        ok: true,
        content: presupuestos
      })
    } else {
      res.status(500).json({
        ok: false,
        content: "Error en la consulta"
      })
    }
  })
}