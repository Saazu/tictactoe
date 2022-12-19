import { useState } from "react";
import checkWinner from "../utils/checkWinner";
import useLocalStorage from "./useLocalStorage";

/**
 *
 * @param {Number} rowLength : initial loadingstate
 * @returns
 */
const useTicTacToe = (rowLength: number) => {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState("No winner yet");
  const [restart, setRestart] = useState(false);
  const [gameMatrix, setGameMatrix] = useState(
    new Array(rowLength)
      .fill(null)
      .map((cell) => new Array(rowLength).fill(null))
  );
  const [state, setLocalStorageState] = useLocalStorage("tictactoe", null);
  const [moveCount, setMoveCount] = useState(0);

  console.log(state);

  function handlePlayerMove(currentRow: number, currentColumn: number) {
    gameMatrix[currentRow][currentColumn] = currentTurn;
    const currentMoveCount: number = moveCount + 1;
    setMoveCount(currentMoveCount);
    const winner = checkWinner(
      gameMatrix,
      rowLength,
      currentRow,
      currentColumn,
      currentMoveCount
    );
    console.log(`the winner is: ${winner}`);
    // TO DO: update function to use deep copy of arrays
    setGameMatrix(gameMatrix);
    setCurrentTurn((currentTurn) => (currentTurn === "X" ? "O" : "X"));
    setWinner(winner);
    setLocalStorageState({ gameMatrix, winner, currentTurn, moveCount });
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
