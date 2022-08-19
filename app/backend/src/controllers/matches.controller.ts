import { Request, Response } from 'express';
import { IMatchesMethods } from '../interfaces/matches.interface';
import { STATUS_SUCCESS } from '../utils/httpStatus';

export default class MatchesController {
  constructor(private service: IMatchesMethods) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(STATUS_SUCCESS).json(result);
  };
}
