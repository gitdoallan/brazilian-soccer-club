import { Request, Response } from 'express';
import { IMatchesMethods } from '../interfaces/matches.interface';
import { STATUS_SUCCESS } from '../utils/httpStatus';

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
}
