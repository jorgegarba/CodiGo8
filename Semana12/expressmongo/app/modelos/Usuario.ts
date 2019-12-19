import { Schema } from 'mongoose';


export let usuarioSchema: Schema = new Schema({
  usu_nom: String,
  usu_ape: String,
  usu_hash: String,
  usu_salt: String,
  usu_fonos: [
    {
      numero: String,
      operador: String
    }
  ]
})