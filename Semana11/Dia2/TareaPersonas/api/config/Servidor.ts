import express from 'express';
import bodyParser from 'body-parser';
import { persona_router } from '../routes/persona';

export class Servidor {
    public app: express.Application;
    public puerto: number;
    constructor() {
        // Inicializo app para que sea una instancia de la clase express
        this.app = express();
        // Inicializo mi puerto
        this.puerto = 3000;
        // Inicializo mi body-parser para especificar que tipo de datos tengo que capturar en el body
        this.app.use(bodyParser.json());
        // urlencoded sirve para leer la informacion mandada por los forms
        this.app.use(bodyParser.urlencoded({ extended: true }));
        // Llamamos al metodo para configurar rutas en el constructor
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.use('/api', persona_router);

    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor corriendo exitosamente en el puerto ${this.puerto}`)
        })
    }
}