import useLocalStorage from "./useLocalStorage";
import { PlayerMove } from "../common/types.typedef";

const useTicTacToeHistory = () => {
  const [playerScoreHistory, setPlayerScoreHistory] = useLocalStorage(
    "ttt-score",
    { X: 0, O: 0, DRAW: 0 }
  );

  function recordWinner(winner: PlayerMove | "DRAW") {
    setPlayerScoreHistory({
      ...playerScoreHistory,
      [winner]: playerScoreHistory[winner] + 1,
    });
  }

  function resetScore() {
    setPlayerScoreHistory({ X: 0, O: 0, DRAW: 0 });
  }

  return {
    playerXScore: playerScoreHistory.X,
    playerOScore: playerScoreHistory.O,
    drawScore: playerScoreHistory.DRAW,
    resetScore,
    recordWinner,
  };
};

export default useTicTacToeHistory;
