import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';

import http from 'http';

import socketIO from 'socket.io';



export class Server {
  public app: express.Application;
  public httpServer: http.Server;
  public io: socketIO.Server;
  // public static _instance: Server;

  public PUERTO = process.env.PORT || 3000;


  constructor() {
    this.app = express();
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);

    this.configurarBodyParser();
    this.configurarRutas();
    this.habilitarCORS();
    this.escucharSockets();
  }

  // public static get instance() {
  //   return this._instance || (this._instance = new this());
  // }

  escucharSockets() {
    console.log("Escuchando Sockets");
    // Evento 'connect'
    // Es un evento que se dispara automáticamente cuando un cliente
    // se conecta al servidor SOCKET(io)
    this.io.on("connect", (cliente: socketIO.Socket) => {
      console.log("Se conectó " + cliente.id);

      cliente.on("disconnect", () => {
        console.log("Se desconectó " + cliente.id);
      }); 

    });

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



  }

  start() {
    this.httpServer.listen(this.PUERTO, () => {
      console.log("Servidor corriendo perfectamente en el puerto " + this.PUERTO);
    })
  }
}