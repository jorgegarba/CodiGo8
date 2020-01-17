import { recurso_router } from './../routes/Recurso';
import { familia_router } from './../routes/Familia';
import { conexion } from './sequelize';
import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import { proyecto_router } from '../routes/Proyecto';
import { unidadmedida_router } from '../routes/UnidadMedida';
import { usuario_router } from '../routes/Usuario';
import { categoria_router } from '../routes/Categoria';
import { documento_router } from '../routes/Documento';
import { gi_router } from '../routes/GastoIngreso';
import { proveedor_router } from '../routes/Proveedor';
import { imagen_router } from '../routes/Imagen';

import swaggerUi from 'swagger-ui-express';
import json from "./../docs/apidocs.json";
import { presupuestoproyecto_router } from '../routes/PresupuestoProyecto';

export class Server {
  public app: express.Application;
  public PUERTO = process.env.PORT || 3000;
  constructor() {
    this.app = express();
    this.habilitarCORS();
    this.configurarBodyParser();
    this.configurarRutas();
  }

  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });

  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
  configurarRutas() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        ok: true,
        message: "El servidor está activo!"
      });
    });

    this.app.use("", categoria_router);
    this.app.use("", documento_router);
    this.app.use("", familia_router);
    this.app.use("", gi_router);
    this.app.use("", proveedor_router);
    this.app.use("", proyecto_router);
    this.app.use("", unidadmedida_router);
    this.app.use("", usuario_router);
    this.app.use("", imagen_router);
    this.app.use("", recurso_router);
    this.app.use("", presupuestoproyecto_router);

    this.app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(json));

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