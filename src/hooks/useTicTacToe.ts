import { useState } from "react";
import checkWinner from "../utils/checkWinner";
import {
  GameResultState,
  PlayerMove,
  GameMatrix,
} from "../common/types.typedef";
import cloneDeep from "lodash.clonedeep";

/**
 *
 * @param {Number} rowLength : initial loadingstate
 * @returns
 */
const useTicTacToe = (rowLength: number) => {
  const [currentTurn, setCurrentTurn] = useState<PlayerMove>(PlayerMove.X);
  const [winner, setWinner] = useState<GameResultState>("No Winner Yet");
  const [restart, setRestart] = useState(false);
  const [gameMatrix, setGameMatrix] = useState<GameMatrix>(
    new Array(rowLength)
      .fill(null)
      .map((cell) => new Array(rowLength).fill(null)),
  );
  const [moveCount, setMoveCount] = useState(0);

  function handlePlayerMove(currentRow: number, currentColumn: number) {
    gameMatrix[currentRow][currentColumn] = currentTurn;
    const currentMoveCount: number = moveCount + 1;
    setMoveCount(currentMoveCount);
    const winner = checkWinner(
      gameMatrix,
      rowLength,
      currentRow,
      currentColumn,
      currentMoveCount,
    );
    setGameMatrix(cloneDeep(gameMatrix));
    setCurrentTurn((currentTurn) =>
      currentTurn === PlayerMove.X ? PlayerMove.O : PlayerMove.X,
    );
    setWinner(winner);
  }

  function restartGame() {
    setRestart(true);
  }

  return {
    winner,
    currentTurn,
    restart,
    gameMatrix,
    handlePlayerMove,
    restartGame,
  };
};

export default useTicTacToe;
