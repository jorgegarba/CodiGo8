import { Usuario } from './../config/mongoose';
import { Request, Response } from 'express';
const sgMail = require('@sendgrid/mail');



const Nexmo = require('nexmo');


const accountSid = 'AC6c0a72b5c2f9e4670d6d3c7675d45903';
const authToken = '4345259aebb774bc87e13f195fee5f5e';
const client = require('twilio')(accountSid, authToken);



export const enviarCorreo = (req: Request, res: Response) => {

  sgMail.setApiKey("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");
  const msg = {
    to: 'josezea@gmail.com',
    from: 'jorgegarba@gmail.com',
    subject: 'Codigo9 - Correo de Prueba',
    text: 'Enviando un correo de prueba',
    html: `<strong>
      CODIGO 9 - para José
    </strong>`,
  };
  sgMail.send(msg);

}


export const enviarMensajeTwilio = (req: Request, res: Response) => {


  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+17042094613',
      to: '+51974204853'
    })
    .then((message: any) => console.log(message.sid));

}

export const enviarMensaje = (req: Request, res: Response) => {

  const nexmo = new Nexmo({
    apiKey: '6f9568e5',
    apiSecret: 'obeAmR12CEoLCAvf',
  });

  const from = 'Nexmo';
  const to = '51951531310';
  const text = 'Mensaje de Prueba';


  nexmo.message.sendSms(from, to, text, {}, (err: any, responseData: any) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  });



}


export const getAll = (req: Request, res: Response) => {

  let { desde } = req.query;
  desde = +desde;

  if (isNaN(desde)) {
    // no es un numero o no llegó el parámetro
    desde = 0;
  }

  Usuario.count({}, (error, count) => {

    Usuario.find().skip(desde).limit(10).exec((error, usuarios) => {
      if (error) {
        res.status(500).json({
          ok: false,
          content: "Error al traer los recursos"
        });
      } else {
        res.status(200).json({
          ok: true,
          content: {
            pagina: desde == 0 ? 1 : desde / 10,
            por_pagina: 10,
            total: count,
            total_paginas: Math.ceil(count / 10),
            data: usuarios
          }
        });
      }
    })

  })



}

export const post = (req: Request, res: Response) => {
  let objUsuario = new Usuario(req.body);
  objUsuario.save((error, usuCreado) => {
    if (error) {
      res.status(500).json({
        ok: false,
        content: "Error al crear el Usuario"
      });
    } else {
      res.status(201).json({
        ok: true,
        content: usuCreado
      })
    }
  })
}