import { Request, Response } from 'express';
import { UnidadMedida } from '../config/sequelize';

export const postUnidadMedida = (req: Request, res: Response) => {
    let { nombre, abreviatura } = req.body;
    // el build a diferencia del create hace una pre comprobacion, si todo esta correcto recien lo guarda en la base de datos y por ende si algo esta mal, no lo guarda y no desperdicia el numero de la pk, a comparativa del create que si algo esta mal, no lo guarda en la base datos, pero esa pk ya se toma como usada, y la siguiente vez que guardemos ya se usara su correlativo, con el create ya no es necesario el save 
    UnidadMedida.build({
        um_nom: nombre,
        um_abr: abreviatura
    }).save().then((objUnidadMedida: any) => {
        res.status(201).json({
            ok: true,
            content: objUnidadMedida
        })
    }).catch((error: any) => {
        res.status(500).json({
            ok: false,
            content: error.errors
        })
    })
}

export const getUnidadMedidas = (req: Request, res: Response) => {
    UnidadMedida.findAll().then((objUnidadMedida: any) => {
        res.status(200).json({
            ok: true,
            content: objUnidadMedida
        })
    })
}

export const getUnidadMedidaByNombre = (req: Request, res: Response) => {
    let { nombre } = req.params;
    UnidadMedida.findAll({
        where: { um_nom: nombre }
    }).then((objUnidadMedida: any) => {
        if (objUnidadMedida) {
            res.status(200).json({
                ok: true,
                content: objUnidadMedida
            })
        }
        else {
            res.status(200).json({
                ok: false,
                content: "No se encontro esa unidad de medida"
            })
        }
    })
}