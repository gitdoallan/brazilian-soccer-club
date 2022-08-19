import { Router } from 'express';
import Repository from '../repository/teams.repository';
import Controller from '../controllers/teams.controller';
import Service from '../services/teams.service';

const teamsRepository = new Repository();
const teamsService = new Service(teamsRepository);
const teamsController = new Controller(teamsService);

const router = Router();

router.get('/', teamsController.getAll);

export default router;
