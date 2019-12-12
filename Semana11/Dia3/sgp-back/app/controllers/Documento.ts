import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { Documento, Proveedor } from '../config/sequelize';

export var createDocumento = (req: Request, res: Response) => {
    let objDocumento = Documento.build(req.body);
    Proveedor.findByPk(req.body.prov_id).then((proveedor: Model) => {
        if (proveedor) {
            return objDocumento.save();
        } else {
            res.status(404).json({
                ok: false,
                content: 'No hay ese proveedor en la base de datos'
            })
        }
    }).then((documentocreado: Model) => {
        res.status(201).json({
            ok: true,
            content: documentocreado
        })
    }).catch((error: any) => {
        res.status(500).json({
            ok: false,
            content: error.errors
        })
    })
}
export var getDocumento = (req: Request, res: Response) => {
    let { id_doc } = req.params;
    Documento.findByPk(id_doc).then((objDocumento: Model) => {
        if (objDocumento) {
            res.status(200).json({
                ok: true,
                content: objDocumento
            })
        }
        else{
            res.status(404).json({
                ok:false,
                content:'No hay ese documento'
            })
        }
    })
}