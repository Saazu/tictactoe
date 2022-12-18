import React, { useState } from "react";
import Board from "../Board/Board";
import InitGame from "../InitGame/InitGame";

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
    <Board rowLength={rowLength} stopGame={stopGame} />
  ) : (
    <InitGame startGame={startGame} setBoardSize={setBoardSize} />
  );
}

export default Game;
