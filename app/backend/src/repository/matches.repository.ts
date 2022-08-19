import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

import { IMatchesMethods } from '../interfaces/matches.interface';

export default class MatchesRepository implements IMatchesMethods {
  constructor(private model = Matches) {
    this.model = model;
  }

  getAll = async () => {
    const results = await this.model.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return results;
  };

  inProgress = async () => {
    const results = await this.model.findAll({ where: { inProgress: true },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return results;
  };
}
