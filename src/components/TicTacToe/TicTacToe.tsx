import Square from "../Square/Square";
import Game from "../Game/Game";
import useTicTacToe from "../../hooks/useTicTacToe";
import "./tictactoe.css";
import "../../common/styles.css";
import { GameHistory, PlayerMove } from "../../common/types.typedef";
import { useEffect } from "react";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";

type BoardProps = {
  rowLength: number;
  stopGame: () => void;
  recordWinner: (winner: PlayerMove | "DRAW") => void;
  gameHistory: GameHistory;
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
        return "2.2rem";
      case 4:
        return "1.6rem";
      case 5:
        return "1.3rem";
      case 6:
        return "1rem";
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
      margin: "1rem auto",
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
          />,
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
      <div className="flex-row">
        <div className="flex-row">
          <ScoreDisplay scoreHistory={gameHistory} />
        </div>
      </div>

      <div role="alert">
        {winner ? (
          <h3>Winner: {winner}</h3>
        ) : (
          <h3>Current Player: {currentTurn}</h3>
        )}
      </div>

      <div className="flex-row">
        <button className="btn" onClick={playNewGame}>
          Restart
        </button>
        <button className="btn" onClick={resetScore}>
          Reset Scores
        </button>
      </div>
      <div className="flex-row board">{generateBoard()}</div>
    </div>
  );
}

export default TicTacToe;
