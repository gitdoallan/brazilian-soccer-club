import { Request, Response } from 'express';
import { ITeams } from '../interfaces/teams.interface';
import { STATUS_SUCCESS } from '../utils/httpStatus';

export default class TeamsController {
  constructor(private service: ITeams) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(STATUS_SUCCESS).json(result);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getById(+id);
    return res.status(STATUS_SUCCESS).json(result);
  };
}
