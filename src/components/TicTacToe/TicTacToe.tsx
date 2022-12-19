import Square from "../Square/Square";
import Game from "../Game/Game";
import useTicTacToe from "../../hooks/useTicTacToe";
import "./board.css";
import "../../common/styles.css";
import { PlayerMove } from "../../common/types.typedef";
import { useEffect } from "react";

type BoardProps = {
  rowLength: number;
  stopGame: () => void;
  recordWinner: (winner: PlayerMove | "DRAW") => void;
  gameHistory: {
    playerOScore: number;
    playerXScore: number;
    drawScore: number;
  };
  resetScore: () => void;
};

function TicTacToe({
  rowLength,
  stopGame,
  recordWinner,
  gameHistory,
  resetScore,
}: BoardProps) {
  const {
    winner,
    currentTurn,
    restart,
    gameMatrix,
    handlePlayerMove,
    restartGame,
  } = useTicTacToe(rowLength);
  const disableSquare = winner !== "No Winner Yet";

  useEffect(() => {
    if (winner !== "No Winner Yet") {
      recordWinner(winner);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

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
        <span>
          <h2>Winner: {winner ? winner : "No one yet!"}</h2>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>
            Scores: X - {gameHistory.playerXScore} Y -{" "}
            {gameHistory.playerXScore} Draws - {gameHistory.drawScore}
          </span>
        </span>
      </div>
      {generateBoard()}
      <div className="current-player">
        <h3>Current Player: {currentTurn}</h3>
      </div>
      <button className="btn" onClick={playNewGame}>
        Restart
      </button>
      <button className="btn" onClick={resetScore}>
        Reset Scores
      </button>
    </div>
  );
}

export default TicTacToe;
