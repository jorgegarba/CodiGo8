import { getAll, post } from './../controleadores/Usuario';
import { Router } from 'express';

export let usuario_router = Router();
usuario_router.get("/usuario", getAll);
usuario_router.post("/usuario", post);