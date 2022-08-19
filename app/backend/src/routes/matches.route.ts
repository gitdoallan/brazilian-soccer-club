import { Router } from 'express';
import Repository from '../repository/matches.repository';
import Service from '../services/matches.service';
import Controller from '../controllers/matches.controller';

const matchesRepository = new Repository();
const matchesService = new Service(matchesRepository);
const matchesController = new Controller(matchesService);

const router = Router();

router.get('/', matchesController.getAll);

export default router;
