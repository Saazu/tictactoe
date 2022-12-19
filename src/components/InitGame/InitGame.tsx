import React from "react";
import "../../common/styles.css";
import "./initgame.css";

type InitGameProps = {
  startGame: () => void;
  setBoardSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  rowLength: number;
};

function InitGame({ startGame, setBoardSize, rowLength }: InitGameProps) {
  return (
    <div className="details">
      <h1 className="header">Tic Tac Toe</h1>
      <div className="instructions">
        <p>Select the number of rows and columns and click play to start</p>
        <p>You can create a 3X3, 4X4, 5X5, or 6X6 grid</p>
      </div>

      <div className="game-setup">
        <label>Number of Rows annd Columns</label>
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
      </div>
    </div>
  );
}

export default InitGame;
