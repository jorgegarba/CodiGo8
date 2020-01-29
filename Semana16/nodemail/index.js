let express = require ('express');
let morgan = require ('morgan');
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

let app = express();

let configuracion = nodemailer.createTransport({
    service:'gmail',
    auth:{
        //osmarmontes50@gmail.com
        user:'osmarmontes50@gmail.com',
        //contraseña
        pass:'Coldpl@y60'
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Morgan es un middleware que me permite inspeccionar las peticiones que recibe mi back y asi evaluar o analizar el rendimiento.
app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.status(200).send("Todo OK, Servidor Funcionando")
})
app.post('/correo', (req, res) => {
    console.log("request",req.body);
    let email = {
        from:'osmarmontes50@gmail.com',
        to:req.body.email,
        subject:req.body.subject,
        text:req.body.text
    }

        configuracion.sendMail(email,(error, info) => {
            if(error){
                console.log("error al enviar", error);
                res.status(500).send("Error al enviar");
            }else{
                console.log("Success", info);
                res.status(200).send("Correo enviado exitosamente");
            }
        })
})

app.listen(4000, () => {
    console.log("Servidor funcionando en el puerto 4000");
})