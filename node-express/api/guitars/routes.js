import { Router } from 'express';
import { listGuitars, showGuitar } from './controller.js';
export const routes = new Router();


routes.get('/', listGuitars);

routes.get('/:id', showGuitar);


