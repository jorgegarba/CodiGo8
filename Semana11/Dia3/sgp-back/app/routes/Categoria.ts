import { postCategoria, getCategorias } from './../controllers/Categoria';
import { Router } from 'express';

export let categoria_router = Router();

categoria_router.post('/categoria', postCategoria);
categoria_router.get('/categorias',getCategorias);