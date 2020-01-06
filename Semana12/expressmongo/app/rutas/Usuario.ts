import { getAll, post, enviarMensaje, enviarMensajeTwilio, enviarCorreo } from './../controleadores/Usuario';
import { Router } from 'express';

export let usuario_router = Router();
usuario_router.get("/usuario", getAll);
usuario_router.get("/nexmo", enviarMensaje);
usuario_router.get("/twilio", enviarMensajeTwilio);
usuario_router.post("/usuario", post);
usuario_router.post("/sengrid", enviarCorreo);