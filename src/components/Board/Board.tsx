import Square from "../Square/Square";
import Game from "../Game/Game";
import useTicTacToe from "../../hooks/useTicTacToe";
import "./board.css";

type BoardProps = {
  rowLength: number;
  stopGame: () => void;
};

function Board({ rowLength, stopGame }: BoardProps) {
  const {
    winner,
    currentTurn,
    restart,
    gameMatrix,
    handlePlayerMove,
    restartGame,
  } = useTicTacToe(rowLength);

  function generateBoardStyles() {
    return {
      display: "grid",
      gridTemplate: `repeat(${rowLength}, 1fr) / repeat(${rowLength}, 1fr)`,
      gridGap: "1.5vw",
      maxWidth: "600px",
      width: "96vw",
      maxHeight: "600px",
      height: "96vw",
      margin: "0 auto",
    };
  }

  function playNewGame() {
    stopGame();
    restartGame();
  }

  function generateBoard() {
    const board = [];
    for (let r = 0; r < rowLength; r++) {
      const row = [];
      for (let c = 0; c < rowLength; c++) {
        row.push(
          <Square
            key={`${r}${c}`}
            row={r}
            column={c}
            value={gameMatrix[r][c]}
            disable={Boolean(winner)}
            setValue={handlePlayerMove}
          />
        );
      }
      board.push(row);
    }
    return <div style={{ ...generateBoardStyles() }}>{board}</div>;
  }

  if (restart) {
    return <Game />;
  }

  return (
    <div className="board">
      <div className="game-state">
        Winner: {winner ? winner : "No one yet!"}
      </div>
      <div>Current player: {currentTurn}</div>
      {generateBoard()}
      <button className="restart" onClick={playNewGame}>
        Restart
      </button>
    </div>
  );
}

export default Board;
