import {Router} from 'express';
import { subirImagen, eliminarImagen, getImagenById, updateImagenById } from '../controllers/Imagen';

export var imagen_router = Router();
var multiPart = require('connect-multiparty');
var multipartMiddleware = multiPart({uploadDir:'./imagenes'});

imagen_router.post('/imagen/upload',multipartMiddleware,subirImagen);
imagen_router.delete('/imagen/:id_img',eliminarImagen);
imagen_router.get('/imagen/:id_img',getImagenById);
imagen_router.put('/imagen/:id_img',multipartMiddleware,updateImagenById);