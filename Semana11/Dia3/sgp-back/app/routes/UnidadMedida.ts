import {Router} from 'express';
import { getUnidadMedidas, postUnidadMedida, getUnidadMedidaByNombre } from '../controllers/UnidadMedida';

export let unidadmedida_router = Router();

unidadmedida_router.get("/um",getUnidadMedidas);
unidadmedida_router.post("/um",postUnidadMedida);
unidadmedida_router.get("/um/:nombre",getUnidadMedidaByNombre);