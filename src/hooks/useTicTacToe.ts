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
  const [winner, setWinner] = useState("");
  const [restart, setRestart] = useState(false);
  const [gameMatrix, setGameMatrix] = useState(
    new Array(rowLength)
      .fill(null)
      .map((cell) => new Array(rowLength).fill(null))
  );
  const [state, setLocalStorageState] = useLocalStorage("tictactoe", null);

  function handlePlayerMove(currentRow: number, currentColumn: number) {
    gameMatrix[currentRow][currentColumn] = currentTurn;
    const winner = checkWinner(
      gameMatrix,
      rowLength,
      currentRow,
      currentColumn
    );
    console.log(`the winner is: ${winner}`);
    // TO DO: update function to use deep copy of arrays
    setGameMatrix(gameMatrix);
    setCurrentTurn((currentTurn) => (currentTurn === "X" ? "O" : "X"));
    setWinner(winner);
    setLocalStorageState({ gameMatrix, winner, currentTurn });
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
