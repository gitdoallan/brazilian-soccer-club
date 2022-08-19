import { Request, Response } from 'express';
import { IMatchesMethods } from '../interfaces/matches.interface';
import { STATUS_SUCCESS, STATUS_CREATED } from '../utils/httpStatus';
import { MSG_FINISH_MATCH, MSG_MATCH_INFO_UPDATED } from '../utils/returnedMessages';

export default class MatchesController {
  constructor(private service: IMatchesMethods) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    if (req.query.inProgress) {
      const bool = (req.query.inProgress === 'true');
      const results = await this.service.inProgress(bool);
      return res.status(STATUS_SUCCESS).json(results);
    }
    const result = await this.service.getAll();
    return res.status(STATUS_SUCCESS).json(result);
  };

  public saveMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const match: any = {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    };
    const result = await this.service.saveMatch(match);
    return res.status(STATUS_CREATED).json(result);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.finishMatch(+id);
    return res.status(STATUS_SUCCESS).json({ message: MSG_FINISH_MATCH });
  };

  public updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const match: any = {
      homeTeamGoals,
      awayTeamGoals,
    };
    await this.service.updateMatch(+id, match);
    return res.status(STATUS_SUCCESS).json({ message: MSG_MATCH_INFO_UPDATED });
  };
}
