export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeams {
  getAll(): Promise<ITeam[]>;
  getById(id: number): Promise<ITeam | null>;
}
