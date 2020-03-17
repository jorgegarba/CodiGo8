import { Router } from 'express'
import { RegistrarUsuario, Login, getUsuarios } from '../controllers/Usuario';

export let usuario_router = Router();

usuario_router.post("/registro", RegistrarUsuario);
usuario_router.post("/login", Login);
usuario_router.get("/usuario", getUsuarios)