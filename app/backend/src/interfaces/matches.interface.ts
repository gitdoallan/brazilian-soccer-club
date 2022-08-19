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

export interface ISaveMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IUpdateMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchesMethods {
  getAll(): any;
  inProgress(progress: boolean): any;
  saveMatch(match: IMatches): any;
  finishMatch(id: number): any;
  findAndCountById(id: number[]): any;
  updateMatch(id: number, match: IUpdateMatch): any;
}
