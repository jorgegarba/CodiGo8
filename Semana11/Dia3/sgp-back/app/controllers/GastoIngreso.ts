import { Request, Response } from 'express';
import { Model } from 'sequelize/types';
import { GastoIngreso, Usuario, Documento } from '../config/sequelize';

export var createGI = (req:Request,res:Response)=>{
    let objGI = GastoIngreso.build(req.body);
    Usuario.findByPk(req.body.usu_id).then((usuario:Model)=>{
        if(usuario){
            return Documento.findByPk(req.body.doc_id)
        }else{
            res.status(404).json({
                ok:false,
                content:'No hay ese usuario en la base datos'
            })
        }
    }).then((documento:Model)=>{
        if (documento){
            return objGI.save();
        }else{
            res.status(404).json({
                ok:false,
                content:'No hay ese documento en la base de datos'
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
    Usuario.findByPk(req.body.usu_id).then((usuario:Model)=>{
        if(usuario){
            return Documento.findByPk(req.body.doc_id)
        }else{
            res.status(404).json({
                ok:false,
                content:'No hay ese usuario en la base datos'
            })
        }
    }).then((documento:Model)=>{
        if (documento){
            return GastoIngreso.update(req.body,{where:{gasin_id:id_gi}});
        }else{
            res.status(404).json({
                ok:false,
                content:'No hay ese documento en la base de datos'
            })
        }
    }).then((objGI:Model)=>{
        res.status(200).json({
            ok:true,
            content:objGI
        })
    }).catch((error:any)=>{
        res.status(500).json({
            ok:false,
            content:error
        })
    })
}