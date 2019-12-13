import { Request, Response } from 'express';
import { Imagen } from '../config/sequelize';
import { Model } from 'sequelize/types';

// file system => libreria propia de node para manejar archivos
var fs = require('fs');
// path_module => libreria propia de node para manejar archivos
var path_module = require('path');

export var subirImagen = (req: Request, res: Response) => {
    try {
        // imagen => es el nombre de mi llave donde va a estar alojado mi archivo
        let ruta = req.files.imagen.path;
        let nombreYExtension = ruta.split("\\")[1];
        Imagen.build({
            doc_id: req.body.doc_id,
            ima_url: nombreYExtension
        }).save().then((objImagen: Model) => {
            res.status(201).json({
                ok: true,
                content: objImagen
            })
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            content: 'No se ha seleccionado ningun archivo'
        })
    }
}
export var eliminarImagen = (req: Request, res: Response) => {
    let { id_img } = req.params;
    var url = "";
    Imagen.findByPk(id_img).then((imagen: Model) => {
        if (imagen) {
            url = imagen.ima_url;
            return Imagen.destroy({ where: { ima_id: id_img } })
        } else {
            res.status(404).json({
                ok: false,
                content: 'No hay esa imagen en la base de datos'
            })
        }
    }).then((objImagen: Model) => {
        // https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback
        fs.unlink(`imagenes/${url}`, (err: any) => {
            if (!err) {
                res.status(200).json({
                    ok: true,
                    content: 'Imagen eliminada con exito'
                })
            } else {
                console.log(err);
                res.status(500).json({
                    ok: false,
                    content: 'Hubo un error al eliminar la imagen'
                })
            }
        })
    })
}
export var getImagenById = (req: Request, res: Response) => {
    let { id_img } = req.params;
    Imagen.findByPk(id_img).then((objImagen: Model) => {
        let imagenDefault = 'imagenes/default.jpg';
        if (objImagen) {
            let ruta = `imagenes/${objImagen.ima_url}`;
            // metodo que verifica si existe la ruta, devuelve un true si la encuentra y un false si no existe
            // https://nodejs.org/api/fs.html#fs_fs_existssync_path
            if (fs.existsSync(ruta)) {
                // https://nodejs.org/api/path.html#path_path_resolve_paths
                return res.sendFile(path_module.resolve(ruta));
            } else {
                return res.sendFile(path_module.resolve(imagenDefault));
            }
        } else {
            return res.sendFile(path_module.resolve(imagenDefault));
        }
    })
}
export var updateImagenById = (req: Request, res: Response) => {
    // Editar una imagen, subir otra y eliminar la anterior del servidor
    let { id_img } = req.params;
    Imagen.findByPk(id_img).then((objImagen: Model) => {
        fs.unlink(`imagenes/${objImagen.ima_url}`, (err: any) => {
            if (!err) {
                try {
                    // imagen => es el nombre de mi llave donde va a estar alojado mi archivo
                    let ruta = req.files.imagen.path;
                    let nombreYExtension = ruta.split("\\")[1];
                    Imagen.update({
                        ima_url: nombreYExtension
                    },{where:{
                        ima_id:objImagen.ima_id
                    }}).then((objImagen: Model) => {
                        res.status(201).json({
                            ok: true,
                            content: 'Imagen actualizada con exito'
                        })
                    })
                } catch (error) {
                    console.log(error);
                    res.status(404).json({
                        ok: false,
                        content: 'No se ha seleccionado ningun archivo'
                    })
                }
            } else {
                console.log(err);
                res.status(500).json({
                    ok: false,
                    content: 'Hubo un error al actualizar la imagen'
                })
            }
        })
    })
}