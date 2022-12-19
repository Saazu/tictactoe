export enum PlayerMove {
  X = "X",
  O = "O",
}

export type GameResultState =
  | "No Winner Yet"
  | PlayerMove.O
  | PlayerMove.X
  | "Draw";