import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

import { IMatchesMethods, ISaveMatch, IUpdateMatch } from '../interfaces/matches.interface';

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

  inProgress = async (progress: boolean) => {
    const results = await this.model.findAll({ where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return results;
  };

  saveMatch = async (match: ISaveMatch) => {
    const results = await this.model.create(match);
    return results;
  };

  finishMatch = async (id: number) => {
    const results = await this.model.update({ inProgress: false }, { where: { id } });
    return results;
  };

  findAndCountById = async (id: number[]) => {
    const results = await this.model.findAndCountAll({ where: { id } });
    return results;
  };

  updateMatch = async (id: number, match: IUpdateMatch) => {
    const results = await this.model.update(match, { where: { id } });
    return results;
  };
}
