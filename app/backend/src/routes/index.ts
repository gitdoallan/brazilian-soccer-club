import { Router } from 'express';

import loginRoute from './login.route';
import teamsRoute from './teams.route';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/teams', teamsRoute);

export default routes;
