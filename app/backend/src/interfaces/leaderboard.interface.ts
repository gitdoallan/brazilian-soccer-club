export interface ILeaderBoard {
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number | string,
}

export interface ILeaderBoardMethods {
  leaderBoardHome(): Promise<ILeaderBoard[] | void>
}
