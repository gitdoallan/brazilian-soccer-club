import { Router } from 'express';
import Repository from '../repository/matches.repository';
import Service from '../services/matches.service';
import Controller from '../controllers/matches.controller';
import { validateMatchMiddleware } from '../middlewares/validateMatch.middleware';
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';

const matchesRepository = new Repository();
const matchesService = new Service(matchesRepository);
const matchesController = new Controller(matchesService);

const router = Router();

router.get('/', matchesController.getAll);
router.post('/', validateTokenMiddleware, validateMatchMiddleware, matchesController.saveMatch);
router.patch('/:id/finish', matchesController.finishMatch);

export default router;
