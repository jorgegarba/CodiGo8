import { Router } from 'express';
import { ProductoController } from '../controleadores/Producto';

export let producto_router = Router();

producto_router.post('/producto', ProductoController.crearProducto);