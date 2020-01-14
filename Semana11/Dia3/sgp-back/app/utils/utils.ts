const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express';

export const verifcarToken = (token: any) => {
    try {
        // Valida la token enviada de acuerdo a su password y algoritmo, si todo es correcto, retorna un true y si algo esta mal, como su tiempo de vida, contraseña, algoritmo o longitud de la token, retorna un false
        let data = jwt.verify(token, 'sapeee', { algorithm: 'RS256' });
        return data;
    } catch (error) {
        return null;
    }
}

// MIDDLEWARE ó WATCHMEN
export var wachiman = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        let resultado = verifcarToken(token);
        if (resultado) {
            next();
        } else {
            res.status(401).json({
                ok: false,
                content: 'No esta autorizado para realizar la solicitud',
                resultado: resultado
            });
        }
    } else {
        res.status(401).json({
            ok: false,
            content: 'Necesita un token para realizar la solicitud'
        });
    }

}