import mongoose from 'mongoose';
import { usuarioSchema } from '../modelos/Usuario';

export const Usuario = mongoose.model("usuario", usuarioSchema);
