import { GameHistory } from "../../common/types.typedef";
import "../../common/styles.css";
import "./scoreDisplay.css";

type ScoreDisplayProps = {
  scoreHistory: GameHistory;
};

function ScoreDisplay({ scoreHistory }: ScoreDisplayProps) {
  return (
    <div className="score card">
      <div>
        <p className="section-header">Current Score:</p>
      </div>
      <div className="score-list">
        <ul>
          <li>Player X: {scoreHistory.playerXScore} Win</li>
          <li>Player O: {scoreHistory.playerXScore} Wins</li>
          <li>Draws: {scoreHistory.drawScore}</li>
        </ul>
      </div>
    </div>
  );
}

export default ScoreDisplay;
