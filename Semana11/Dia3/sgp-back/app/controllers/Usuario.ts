import { Request, Response } from 'express';
import { Usuario } from '../config/sequelize';

export const RegistrarUsuario = (req: Request, res: Response) => {
    Usuario.findAll({
        where: { usu_email: req.body.usu_email }
    }).then((usuarios: any) => {
        if (usuarios.length != 0) {
            res.status(204).json({
                ok: false,
                content: `El usuario con email ${req.body.usu_email} ya existe!`
            })
        } else {
            // Instanciar un objeto de mi usuario
            let objUsuario = Usuario.build(req.body);
            objUsuario.setSaltAndHash(req.body.password);
            objUsuario.save().then((usuarioCreado: any) => {
                res.status(201).json({
                    ok: true,
                    content: `Usuario ${usuarioCreado.usu_email} creado con exito`
                })
            })
        }
    })
}

export const Login = (req: Request, res: Response) => {
    let { correo, password } = req.body;
    Usuario.findOne({
        where: {
            usu_email: correo
        }
    }).then((objUsuario: any) => {
        if (objUsuario) {
            // Tengo que validar si la contraseña es la correcta
            let validacion = objUsuario.validarPassword(password);
            if (validacion) {
                let token = objUsuario.generarJWT();
                res.status(200).json({
                    ok: true,
                    token,
                    content: 'Usuario correctamente logeado'
                })
            } else {
                res.status(404).json({
                    ok: false,
                    content: 'Usuario o contraseña incorrectos'
                })
            }
        } else {
            res.status(404).json({
                ok: false,
                content: 'Usuario no registrado'
            })
        }
    })
}