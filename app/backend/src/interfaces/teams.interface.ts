export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeams {
  getAll(): Promise<ITeam[]>;
}
