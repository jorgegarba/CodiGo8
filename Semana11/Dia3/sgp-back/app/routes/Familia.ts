import { postFamilia, getFamilia } from './../controllers/Familia';
import { Router } from 'express';

export const familia_router = Router();

familia_router.post('/familia', postFamilia);
familia_router.get('/familia', getFamilia);