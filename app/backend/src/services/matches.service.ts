import { IMatchesMethods, IMatches } from '../interfaces/matches.interface';

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

  async saveMatch(match: IMatches): Promise<IMatches> {
    const results = await this.model.saveMatch(match);
    return results;
  }

  async finishMatch(id: number): Promise<IMatches> {
    const results = await this.model.finishMatch(id);
    return results;
  }
}
