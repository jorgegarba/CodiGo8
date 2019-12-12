import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { GastoIngreso, Usuario, Documento } from '../config/sequelize';

export var createGI = (req:Request,res:Response)=>{
    let objGI = GastoIngreso.build(req.body);
    Usuario.findByPk(req.body.usu_id).then((usuario:Model)=>{
        if(usuario){
            return objGI.save();
        }else{
            res.status(404).json({
                ok:false,
                content:'No hay ese usuario en la base datos'
            })
        }
    }).then((objGIcreado:Model)=>{
        if (objGIcreado){
            res.status(201).json({
                ok:true,
                content:objGIcreado
            })
        }
    }).catch((error:any)=>{
        res.status(500).json({
            ok:false,
            content:error.errors
        })
    })
}
export var getGI = (req:Request,res:Response)=>{
    let {id_gi} = req.params;
    GastoIngreso.findByPk(id_gi,{include:[{model:Documento, attributes:['doc_total']}]}).then((objGI:Model)=>{
        res.status(200).json({
            ok:true,
            content:objGI
        })
    })
}
export var updateGI = (req:Request, res:Response)=>{
    let {id_gi} = req.params;
    GastoIngreso.update(req.body,{where:{gasin_id:id_gi}}).then((objGI:Model)=>{
        res.status(200).json({
            ok:true,
            content:objGI
        })
    })
}