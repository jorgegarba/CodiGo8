import {Router} from 'express';
import { createGI, getGI, updateGI } from '../controllers/GastoIngreso';

export var gi_router = Router();

gi_router.post('/gastoIngreso',createGI);
gi_router.get('/gastoIngreso/:id_gi',getGI);
gi_router.put('/gastoIngreso/:id_gi',updateGI);