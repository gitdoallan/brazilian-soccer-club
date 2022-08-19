import { ITeams } from './teams.interface';

export interface IMatches {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: ITeams;
  teamAway: ITeams;
}

export interface IMatchesMethods {
  getAll(): any;
  inProgress(progress: boolean): any;
}
