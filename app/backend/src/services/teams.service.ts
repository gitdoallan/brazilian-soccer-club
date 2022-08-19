import { ITeams, ITeam } from '../interfaces/teams.interface';

export default class TeamsService implements ITeams {
  constructor(private model: ITeams) {
    this.model = model;
  }

  async getAll(): Promise<ITeam[]> {
    const results = await this.model.getAll();
    return results;
  }
}
