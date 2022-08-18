import { Router } from 'express';
import Repository from '../repository/login.repository';
import Controller from '../controllers/login.controller';
import Service from '../services/login.service';

const loginRepository = new Repository();
const loginService = new Service(loginRepository);
const loginController = new Controller(loginService);

const router = Router();

router.post('/', loginController.login);

export default router;
