import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { Proveedor } from '../config/sequelize';

export const crearProveedor = (req: Request, res: Response) => {
    let objProveedor = Proveedor.build(req.body);
    Proveedor.findAll({where:{
        prov_ruc:req.body.prov_ruc
    }}).then((proveedores:Model)=>{
        if (proveedores.length != 0){
            return res.status(500).json({
                ok:false,
                content:'Ya hay ese proveedor registrado con ese RUC'
            })
        }else{
            return objProveedor.save()
        }
    }).then((proveedor: Model) => {
        return res.status(201).json({
            ok: true,
            content: proveedor
        })
    }).catch((error: any) => {
        return res.status(500).json({
            ok: false,
            content: error.errors
        })
    })
}
export const getProveedor = (req: Request, res: Response) => {
    let { id_prov } = req.params;
    Proveedor.findByPk(id_prov).then((proveedor: Model) => {
        res.status(200).json({
            ok: true,
            content: proveedor
        })
    })
}
export const updateProveedor = (req: Request, res: Response) => {
    let { id_prov } = req.params;
    Proveedor.update(req.body, { where: { prov_id: id_prov } }).then((proveedor:Model)=>{
        res.status(200).json({
            ok:true,
            content:proveedor
        })
    }).catch((error:any)=>{
        res.status(500).json({
            ok:false,
            content:error.errors
        })
    })
}