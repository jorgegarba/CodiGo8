import { Router } from 'express';

import { getProyectos, postProyecto, updateProyecto, deleteProyecto, getProyectobyId } from './../controllers/Proyecto';

export let proyecto_router = Router();

proyecto_router.get("/proyecto", getProyectos);
proyecto_router.post("/proyecto",postProyecto);
proyecto_router.put("/proyecto/:id_proyecto",updateProyecto);
proyecto_router.delete("/proyecto/:id_proyecto",deleteProyecto);
proyecto_router.get("/proyecto/:id_proyecto",getProyectobyId);