import { Router } from 'express';

import { getRecursos } from './../controllers/Recurso';
import { wachiman } from '../utils/utils';
export let recurso_router = Router();

recurso_router.get("/recurso", wachiman, getRecursos);
