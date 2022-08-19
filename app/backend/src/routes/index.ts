import { Router } from 'express';

import loginRoute from './login.route';
import teamsRoute from './teams.route';
import matchesRoute from './matches.route';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/teams', teamsRoute);
routes.use('/matches', matchesRoute);

export default routes;
