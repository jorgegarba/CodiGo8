import { Router } from 'express';
import { buscar } from '../controleadores/Busqueda';

export let busqueda_router = Router();
busqueda_router.get("/buscar/:coleccion/:termino", buscar);