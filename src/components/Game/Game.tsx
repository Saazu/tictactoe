import React, { useState } from "react";
import Board from "../Board/Board";
import InitGame from "../InitGame/InitGame";
import "./game.css";

function Game() {
  const [rowLength, setRowLength] = useState(3);
  const [playingGame, setPlayingGame] = useState(false);

  function setBoardSize(event: React.ChangeEvent<HTMLSelectElement>) {
    setRowLength(Number(event?.currentTarget.value));
  }

  function stopGame() {
    setPlayingGame(false);
  }
  function startGame() {
    setPlayingGame(true);
  }

  return playingGame ? (
    <div className="game-container">
      <Board rowLength={rowLength} stopGame={stopGame} />
    </div>
  ) : (
    <InitGame
      startGame={startGame}
      setBoardSize={setBoardSize}
      rowLength={rowLength}
    />
  );
}

export default Game;
