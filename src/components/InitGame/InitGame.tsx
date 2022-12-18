import React from "react";

type InitGameProps = {
  startGame: () => void;
  setBoardSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function InitGame({ startGame, setBoardSize }: InitGameProps) {
  return (
    <div>
      <h1 className="game-header">Tic Tac Toe</h1>
      <section className="instructions">
        <p>Select the number of rows and columns and click play to start</p>
        <p>You can create a 3X3, 4X4, 5X5, or 6X6 grid</p>
      </section>

      <section>
        <label>Number of Rows annd Columns</label>
        <select className="matrix-select" onChange={setBoardSize}>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <button onClick={startGame}>Play</button>
      </section>
    </div>
  );
}

export default InitGame;
