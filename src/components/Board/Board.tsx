import Square from "../Square/Square";
import Game from "../Game/Game";
import useTicTacToe from "../../hooks/useTicTacToe";
import "./board.css";
import "../../common/styles.css";

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
  const disableSquare = winner !== "No Winner Yet";

  function getFontSize(rowLength: number): string {
    switch (rowLength) {
      case 3:
        return "3rem";
      case 4:
        return "2.5rem";
      case 5:
        return "2rem";
      case 6:
        return "1.5rem";
      default:
        return "3rem";
    }
  }

  function generateBoardStyles() {
    return {
      display: "grid",
      gridTemplate: `repeat(${rowLength}, 1fr) / repeat(${rowLength}, 1fr)`,
      gridGap: "1.5vw",
      maxWidth: "700px",
      width: "96vw",
      maxHeight: "600px",
      height: "96vw",
      margin: "3rem auto",
      fontSize: getFontSize(rowLength),
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
            disable={disableSquare}
            setValue={handlePlayerMove}
            textSize={getFontSize(rowLength)}
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
        <h2>Winner: {winner ? winner : "No one yet!"}</h2>
      </div>
      {generateBoard()}
      <div className="current-player">
        <h3>Current Player: {currentTurn}</h3>
      </div>
      <button className="btn" onClick={playNewGame}>
        Restart
      </button>
    </div>
  );
}

export default Board;
