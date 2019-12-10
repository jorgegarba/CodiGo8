import { Router } from 'express';
// Importo mi controlador con todo el comportamiento que voy a asignar a mis rutas
import { persona_controller } from '../controllers/persona';
// Exporto una variable de tipo Router
export var persona_router = Router();

// AQUI va todas mis rutas de persona
persona_router.get('/personas', persona_controller.traertodos);
persona_router.post('/persona', persona_controller.agregarPersona);
persona_router.put('/persona/:id_persona', persona_controller.editarPersona);
persona_router.delete('/persona/:id_persona', persona_controller.eliminarPersona);