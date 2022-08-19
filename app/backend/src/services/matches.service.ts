import { IMatchesMethods, IMatches } from '../interfaces/matches.interface';
import { ErrorHandler } from '../utils/ErrorHandler';
import { STATUS_NOT_FOUND } from '../utils/httpStatus';
import { MSG_TEAM_ID_NOT_FOUND } from '../utils/returnedMessages';

export default class MatchesService implements IMatchesMethods {
  constructor(private model: IMatchesMethods) {
    this.model = model;
  }

  async getAll(): Promise<IMatches[]> {
    const results = await this.model.getAll();
    return results;
  }

  async inProgress(progress: boolean): Promise<IMatches[]> {
    const results = await this.model.inProgress(progress);
    return results;
  }

  async findAndCountById(id: number[]): Promise<{ count: number, rows: IMatches[] }> {
    const results = await this.model.findAndCountById(id);
    if (results.count < 2) throw new ErrorHandler(STATUS_NOT_FOUND, MSG_TEAM_ID_NOT_FOUND);
    return results;
  }

  async saveMatch(match: IMatches): Promise<IMatches> {
    const { homeTeam, awayTeam } = match;
    await this.findAndCountById([homeTeam, awayTeam]);
    const results = await this.model.saveMatch(match);
    return results;
  }

  async finishMatch(id: number): Promise<IMatches> {
    const results = await this.model.finishMatch(id);
    return results;
  }

  async updateMatch(id: number, match: IMatches): Promise<IMatches> {
    const results = await this.model.updateMatch(id, match);
    return results;
  }
}
