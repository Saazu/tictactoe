import boardHasEmptyCell from "./boardHasEmptyCell";

export default function checkWinner(
  matrix: Array<Array<string>>,
  numCellsPerRow: number,
  lastRow: number,
  lastCol: number
) {
  let winner: string = "";
  let match: number = 0;
  const lastValue: string = matrix[lastRow][lastCol];

  //check Horizontal
  for (let c = 0; c < numCellsPerRow; c++) {
    let currentValue = matrix[lastRow][c];
    if (currentValue === lastValue) match++;
    else match = 0;
    if (match === numCellsPerRow) {
      winner = lastValue;
      break;
    }
  }
  if (winner !== "") return winner;

  match = 0;
  //check Vertical
  for (let r = 0; r < numCellsPerRow; r++) {
    let currentValue = matrix[r][lastCol];
    if (currentValue === lastValue) match++;
    else match = 0;
    if (match === numCellsPerRow) {
      winner = lastValue;
      break;
    }
  }
  if (winner !== "") return winner;

  //check diagonal top-left to bottom-right - include middle
  match = 0;
  for (let r = 0; r <= numCellsPerRow - numCellsPerRow; r++) {
    let rowPosition = r;
    for (
      let column = 0;
      column < numCellsPerRow && rowPosition < numCellsPerRow;
      column++
    ) {
      const currentValue = matrix[rowPosition][column];
      if (currentValue === lastValue) match++;
      else match = 0;
      if (match === numCellsPerRow) {
        winner = lastValue;
        break;
      }
      rowPosition++;
    }
    if (winner !== "") break;
  }
  if (winner !== "") return winner;

  //check diagonal top-left to bottom-right - after middle
  match = 0;
  for (let c = 1; c <= numCellsPerRow - numCellsPerRow; c++) {
    let columnPosition = c;
    for (
      let row = 0;
      row < numCellsPerRow && columnPosition < numCellsPerRow;
      row++
    ) {
      let currentValue = matrix[row][columnPosition];
      if (currentValue === lastValue) match++;
      else match = 0;
      if (match === numCellsPerRow) {
        winner = lastValue;
        break;
      }
      columnPosition++;
    }
    if (winner !== "") break;
  }
  if (winner !== "") return winner;

  //check diagonal bottom-left to top-right - include middle
  match = 0;
  for (
    let r = numCellsPerRow - 1;
    r >= numCellsPerRow - numCellsPerRow - 1;
    r--
  ) {
    let rowPosition = r;
    for (
      let column = 0;
      column < numCellsPerRow &&
      rowPosition < numCellsPerRow &&
      rowPosition >= 0;
      column++
    ) {
      let currentValue = matrix[rowPosition][column];
      if (currentValue === lastValue) match++;
      else match = 0;
      if (match === numCellsPerRow) {
        winner = lastValue;
        break;
      }
      rowPosition--;
    }
    if (winner !== "") break;
  }
  if (winner !== "") return winner;

  //check diagonal bottom-left to top-right - after middle
  match = 0;
  for (let c = 1; c < numCellsPerRow; c++) {
    let columnPosition = c;
    for (
      let row = numCellsPerRow - 1;
      row < numCellsPerRow &&
      row >= 0 &&
      columnPosition < numCellsPerRow &&
      columnPosition >= 1;
      row--
    ) {
      console.log(`[${row}][${columnPosition}]`);
      let currentValue = matrix[row][columnPosition];
      if (currentValue === lastValue) match++;
      else match = 0;
      if (match === numCellsPerRow) {
        winner = lastValue;
        break;
      }
      columnPosition++;
    }
    if (winner !== "") break;
  }
  if (winner !== "") return winner;

  if (boardHasEmptyCell(matrix, numCellsPerRow, numCellsPerRow) === false) {
    winner = "-1";
  }

  return winner;
}
