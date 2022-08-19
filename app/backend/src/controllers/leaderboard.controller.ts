import { Request, Response } from 'express';
import { ILeaderBoardMethods } from '../interfaces/leaderboard.interface';
import { STATUS_SUCCESS } from '../utils/httpStatus';

export default class LeaderBoardController {
  constructor(private service: ILeaderBoardMethods) {
    this.service = service;
  }

  public leaderBoardHome = async (req: Request, res: Response) => {
    const leaderBoard = await this.service.leaderBoardHome();
    return res.status(STATUS_SUCCESS).json(leaderBoard);
  };
}
