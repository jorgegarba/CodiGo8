import { Router } from 'express';

import { getProyectos, postProyecto, updateProyecto, deleteProyecto, getProyectobyId } from './../controllers/Proyecto';
import { wachiman } from '../utils/utils';
export let proyecto_router = Router();

proyecto_router.get("/proyecto", wachiman, getProyectos);
proyecto_router.post("/proyecto", postProyecto);
proyecto_router.put("/proyecto/:id_proyecto", updateProyecto);
proyecto_router.delete("/proyecto/:id_proyecto", deleteProyecto);
proyecto_router.get("/proyecto/:id_proyecto", getProyectobyId);