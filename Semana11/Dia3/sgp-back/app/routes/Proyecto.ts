import { Router } from 'express';

import { getUsuarios } from './../controllers/Proyecto';

export let proyecto_router = Router();

proyecto_router.get("/proyecto", getUsuarios);
