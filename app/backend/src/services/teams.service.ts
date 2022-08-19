import { ITeams, ITeam } from '../interfaces/teams.interface';
import { ErrorHandler } from '../utils/ErrorHandler';
import { STATUS_NOT_FOUND } from '../utils/httpStatus';
import { MSG_TEAM_NOT_FOUND } from '../utils/returnedMessages';

require('express-async-errors');

export default class TeamsService implements ITeams {
  constructor(private model: ITeams) {
    this.model = model;
  }

  async getAll(): Promise<ITeam[]> {
    const results = await this.model.getAll();
    return results;
  }

  async getById(id: number): Promise<ITeam | null> {
    const result = await this.model.getById(id);
    if (!result) throw new ErrorHandler(STATUS_NOT_FOUND, MSG_TEAM_NOT_FOUND);
    return result;
  }
}
