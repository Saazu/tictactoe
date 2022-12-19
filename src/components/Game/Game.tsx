import React, { useState } from "react";
import TicTacToe from "../TicTacToe/TicTacToe";
import InitGame from "../InitGame/InitGame";
import useTicTacToeHistory from "../../hooks/useTicTacToeHistory";
import { GameHistory } from "../../common/types.typedef";
import "./game.css";

function Game() {
  const [rowLength, setRowLength] = useState(3);
  const [playingGame, setPlayingGame] = useState(false);

  const { playerOScore, playerXScore, drawScore, recordWinner, resetScore } =
    useTicTacToeHistory();

  function setBoardSize(event: React.ChangeEvent<HTMLSelectElement>) {
    setRowLength(Number(event?.currentTarget.value));
  }

  function stopGame() {
    setPlayingGame(false);
  }
  function startGame() {
    setPlayingGame(true);
  }

  const gameHistory: GameHistory = {
    playerOScore,
    playerXScore,
    drawScore,
  };

  return (
    <div>
      {playingGame ? (
        <div className="game-container">
          <TicTacToe
            rowLength={rowLength}
            stopGame={stopGame}
            recordWinner={recordWinner}
            gameHistory={gameHistory}
            resetScore={resetScore}
          />
        </div>
      ) : (
        <InitGame
          gameHistory={gameHistory}
          startGame={startGame}
          setBoardSize={setBoardSize}
          rowLength={rowLength}
        />
      )}
    </div>
  );
}

export default Game;
