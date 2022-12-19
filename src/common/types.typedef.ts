export enum PlayerMove {
  X = "X",
  O = "O",
}

export type GameResultState =
  | "No Winner Yet"
  | PlayerMove.O
  | PlayerMove.X
  | "DRAW";

export type GameHistory = {
  playerOScore: number;
  playerXScore: number;
  drawScore: number;
};

export type GameMatrix = Array<Array<PlayerMove>>;
