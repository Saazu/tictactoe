import React from "react";
import "../../common/styles.css";
import { GameHistory } from "../../common/types.typedef";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import "./initgame.css";

type InitGameProps = {
  startGame: () => void;
  setBoardSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  resetScore: () => void;
  rowLength: number;
  gameHistory: GameHistory;
};

function InitGame({
  startGame,
  setBoardSize,
  resetScore,
  rowLength,
  gameHistory,
}: InitGameProps) {
  return (
    <div className="details">
      <div>
        <h1 className="header">Tic Tac Toe</h1>
        <ScoreDisplay scoreHistory={gameHistory} />
        <div className="card instructions">
          <p className="section-header">Rules</p>
          <ul>
            <li>
              Select the number of rows and columns and click play to start
            </li>
            <li>You can create a 3X3, 4X4, 5X5, or 6X6 grid</li>
          </ul>
        </div>

        <div className="card setup details">
          <div>
            <p className="section-header">Setup</p>
            <div className="action">
              <label>Rows and Columns</label>
              <select
                value={rowLength}
                className="matrix-select"
                onChange={setBoardSize}
              >
                <option value={3}>3 x 3</option>
                <option value={4}>4 x 4</option>
                <option value={5}>5 x 5</option>
                <option value={6}>6 x 6</option>
              </select>
            </div>
            <div className="btn-wrapper">
              <button className="btn" onClick={startGame}>
                Play
              </button>
              <button className="btn" onClick={resetScore}>
                Reset Scores
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitGame;
