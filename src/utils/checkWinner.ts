import { GameResultState, PlayerMove } from "../common/types.typedef";

// TO DO: Optimise thus function
export default function checkWinner(
  matrix: Array<Array<PlayerMove>>,
  numCellsPerRow: number,
  currentRow: number,
  currentColumn: number,
  moveCount: number
): GameResultState {
  const currentMove: PlayerMove = matrix[currentRow][currentColumn];

  //check column
  for (let i = 0; i < numCellsPerRow; i++) {
    if (matrix[currentRow][i] !== currentMove) {
      break;
    }
    if (i === numCellsPerRow - 1) {
      return currentMove;
    }
  }

  // check row
  for (let i = 0; i < numCellsPerRow; i++) {
    if (matrix[i][currentColumn] !== currentMove) {
      break;
    }
    if (i === numCellsPerRow - 1) {
      return currentMove;
    }
  }

  // check diagonal
  if (currentRow === currentColumn) {
    for (let i = 0; i < numCellsPerRow; i++) {
      if (matrix[i][i] !== currentMove) {
        break;
      }
      if (i === numCellsPerRow - 1) {
        return currentMove;
      }
    }
  }

  // check anti diagonal
  if (currentRow + currentColumn === numCellsPerRow - 1) {
    for (let i = 0; i < numCellsPerRow; i++) {
      if (matrix[i][numCellsPerRow - 1 - i] !== currentMove) {
        break;
      }
      if (i === numCellsPerRow - 1) {
        return currentMove;
      }
    }
  }

  if (moveCount === Math.pow(numCellsPerRow, 2)) {
    return "DRAW";
  }

  return "No Winner Yet";
}
