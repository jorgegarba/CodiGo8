import { Router } from 'express';
import { postPresupuestos, getPresupuestoByProId } from '../controllers/PresupuestoProyecto';
import { wachiman } from '../utils/utils';

export var presupuestoproyecto_router = Router();
presupuestoproyecto_router.post('/presupuestoproyecto/varios',
  wachiman, postPresupuestos);

presupuestoproyecto_router.post('/presupuestoproyecto/proyecto/:pro_id',
  wachiman, getPresupuestoByProId);