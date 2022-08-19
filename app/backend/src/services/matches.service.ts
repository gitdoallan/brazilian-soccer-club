import { IMatchesMethods, IMatches } from '../interfaces/matches.interface';

export default class MatchesService implements IMatchesMethods {
  constructor(private model: IMatchesMethods) {
    this.model = model;
  }

  async getAll(): Promise<IMatches[]> {
    const results = await this.model.getAll();
    return results;
  }

  async inProgress(): Promise<IMatches[]> {
    const results = await this.model.inProgress();
    return results;
  }
}
