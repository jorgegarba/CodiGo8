let express = require ('express');
let morgan = require ('morgan');
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

class Servidor {
    app = express.application;
    puerto = 4000;

    constructor(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        //Morgan es un middleware que me permite inspeccionar las peticiones que recibe mi back y asi evaluar o analizar el rendimiento.
        this.app.use(morgan('dev'));
        this.rutas();
    }

    rutas(){
        this.app.get('/', (req, res) => {
            res.status(200).send("Todo esta Ok, Servidor funcionando :D");
        })
    }

    start(){
        this.app.listen(this.puerto, () => {
            console.log(`Servidor iniciado exitosamente en el puerto: ${this.puerto}`);
        })
    }

}

module.exports = {Servidor}