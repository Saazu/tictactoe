export enum PlayerMove {
  X = "X",
  O = "O",
}

export type GameResultState = PlayerMove | "No Winner Yet" | "DRAW";

export type GameHistory = {
  playerOScore: number;
  playerXScore: number;
  drawScore: number;
};

export type GameMatrix = Array<Array<PlayerMove>>;
