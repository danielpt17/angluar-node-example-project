import { Router } from 'express';
import tempRouter from './temp.routes';

const routes = Router();

routes.use('/api/temp', tempRouter);

export default routes;
