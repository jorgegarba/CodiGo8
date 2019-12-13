import {Router} from 'express';
import { crearProveedor, getProveedor, updateProveedor } from '../controllers/Proveedor';

export var proveedor_router = Router();
proveedor_router.post('/proveedor',crearProveedor);
proveedor_router.get('/proveedor/:id_prov',getProveedor);
proveedor_router.put('/proveedor/:id_prov',updateProveedor);
