import { Router } from 'express';
import { CategoriaController } from '../controleadores/Categoria';

export let categoria_router = Router();

categoria_router.get('/categoria', CategoriaController.getAll);