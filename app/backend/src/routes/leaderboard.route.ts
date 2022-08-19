import { Router } from 'express';
import Controller from '../controllers/leaderboard.controller';
import Service from '../services/leaderboard.service';

const leaderBoardService = new Service();
const leaderBoardController = new Controller(leaderBoardService);

const router = Router();

router.get('/home', leaderBoardController.leaderBoardHome);

export default router;
