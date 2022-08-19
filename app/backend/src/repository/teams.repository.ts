import Teams from '../database/models/Teams';

import { ITeams } from '../interfaces/teams.interface';

export default class TeamsRepository implements ITeams {
  constructor(private model = Teams) {
    this.model = model;
  }

  getAll = async () => {
    const results = await this.model.findAll();
    return results;
  };
}
