import { Router } from 'express';
import Repository from '../repository/login.repository';
import Controller from '../controllers/login.controller';
import Service from '../services/login.service';
import { validateLoginMiddleware } from '../middlewares/validateLogin.middleware';
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';

const loginRepository = new Repository();
const loginService = new Service(loginRepository);
const loginController = new Controller(loginService);

const router = Router();

router.post('/', validateLoginMiddleware, loginController.login);
router.get('/validate', validateTokenMiddleware);

export default router;
