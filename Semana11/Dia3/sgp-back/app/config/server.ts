import { conexion } from './sequelize';
import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import { proyecto_router } from '../routes/Proyecto';
import { unidadmedida_router } from '../routes/UnidadMedida';
import { usuario_router } from '../routes/Usuario';

export class Server {
  public app: express.Application;
  public PUERTO = process.env.PORT || 3000;
  constructor() {
    this.app = express();
    this.configurarBodyParser();
    this.configurarRutas();
  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }
  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        ok: true,
        message: "El servidor está activo!"
      });
    });

    this.app.use("", proyecto_router);
    this.app.use("", unidadmedida_router);
    this.app.use("", usuario_router);

  }
  start() {
    this.app.listen(this.PUERTO, () => {
      console.log("Servidor corriendo perfectamente en el puerto " + this.PUERTO);
      // sync() => función que sincroniza/crea todos los modelos
      // en la base de datos
      // {force:true} => CUIDADO!, éste comando borrará todas las tablas
      // de la base de datos y las creará nuevamente.
      // {force:false} => Éste comando no borra las tablas PERO TAMPOCO 
      // agrega campos adicionales si ya han sido previamente creados
      // en un modelo.
      conexion.sync({ force: false }).then(() => {
        console.log("== BD creada con Exito ==");
      }).catch((error: any) => {
        console.log("== ERROR al crear la BD");
        console.log(error);
      })

    })
  }
}