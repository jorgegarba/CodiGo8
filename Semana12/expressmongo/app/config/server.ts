import { busqueda_router } from './../rutas/Busqueda';
import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { usuario_router } from '../rutas/Usuario';

export class Server {
  public app: express.Application;

  public PUERTO = process.env.PORT || 3000;


  constructor() {
    this.app = express();

    this.configurarBodyParser();
    this.habilitarCORS();
    this.configurarRutas();
    this.conectarMongo();
  }

  conectarMongo() {
    mongoose.connect('mongodb://localhost:27017/cursosonline',
      { useNewUrlParser: true, useUnifiedTopology: true });

    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function () {
    //   console.log("conexion exitosa");
    // });
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
    this.app.use("", usuario_router);
    this.app.use("", busqueda_router);
  }

  start() {
    this.app.listen(this.PUERTO, () => {
      console.log("Servidor corriendo perfectamente en el puerto " + this.PUERTO);
    })
  }
}