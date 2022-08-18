import { Router } from 'express';

import loginRoute from './login.route';

const routes = Router();

routes.use('/login', loginRoute);

export default routes;
