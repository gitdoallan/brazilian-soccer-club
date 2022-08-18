import { Router } from 'express';
import Controller from '../controllers/login.controller';
import Service from '../services/login.service';

const loginService = new Service();
const loginController = new Controller(loginService);

const router = Router();

router.post('/', loginController.login);

export default router;
