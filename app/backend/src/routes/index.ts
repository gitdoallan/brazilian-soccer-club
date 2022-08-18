import { Router } from 'express';

import loginRoute from './login.route';

import { validateLoginMiddleware } from '../middlewares/validateLogin.middleware';

const routes = Router();

routes.use('/login', validateLoginMiddleware, loginRoute);

export default routes;
