import express, { Request, Response } from 'express';

// Importando libreria BODY-PARSER que nos servirá
// para recibir elementos por el BODY de los requests
import bodyParser from 'body-parser';

// Creando una instancia de EXPRESS
// app => es el servidor web
let app: express.Application = express();
let puerto: number = 3000;

// Configurando BODY PARSER
// OJO=> Obligatorio hacerlo antes de configurar las rutas del
// servidor
// Ésta configuración sirve para recibir peticiones con el 
// protocolo 'application/json'
app.use(bodyParser.json());

// función get()
// 1. especifica la ruta y el verbo GET
// 2. Callback que recibe 2 parametros
// 2.1. Req(Request), Tiene información de la solicitud del cliente
// 2.2. Res(Response), Objeto que maneja la información
//      Para la respuesta al cliente.
app.get('/', (req: Request, res: Response) => {
  res.json({
    mensaje: "Respuesta correcta del servidor"
  });
});
app.post('/usuario', (req: Request, res: Response) => {
  res.json({
    mensaje: "Usuario creado correctamente"
  })
});

// RECIBIR PARAMETROS POR LA URL
app.get('/usuario/:id_usuario', (req: Request, res: Response) => {
  // para recibir los parametros, se usa el objeto
  // 'req.params'
  let id = req.params.id_usuario;
  res.json({
    ok: true,
    mensaje: `El id recibido es ${id}`
  });
});

// RECIBIR PARAMETROS POR EL BODY
app.post('/persona', (req: Request, res: Response) => {
  // Para obtener los parámetros enviados por el body
  // se accede al objeto [req.body]
  let objPersona = req.body;
  console.log(objPersona);
  res.json({
    ok: true,
    contenido: objPersona
  })

})


// Levantar o lanzar el servidor
app.listen(puerto, () => {
  console.log("Servidor corriendo correctamente en el puerto " + puerto);
});


