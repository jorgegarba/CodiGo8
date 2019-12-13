import {Router} from 'express';
import { createDocumento, getDocumento } from '../controllers/Documento';

export var documento_router = Router()

documento_router.post('/documento',createDocumento);
documento_router.get('/documento/:id_doc',getDocumento);