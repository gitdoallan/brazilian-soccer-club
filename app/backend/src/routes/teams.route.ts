import { Router } from 'express';
import Repository from '../repository/teams.repository';
import Service from '../services/teams.service';
import Controller from '../controllers/teams.controller';

const teamsRepository = new Repository();
const teamsService = new Service(teamsRepository);
const teamsController = new Controller(teamsService);

const router = Router();

router.get('/', teamsController.getAll);
router.get('/:id', teamsController.getById);

export default router;
