import { GameHistory } from "../../common/types.typedef";
import "../../common/styles.css";
import "./scoreDisplay.css";

type ScoreDisplayProps = {
  scoreHistory: GameHistory;
};

function ScoreDisplay({ scoreHistory }: ScoreDisplayProps) {
  function formatPlural(numWins: number, str: string): string {
    if (numWins == 1) {
      return str;
    }
    return `${str}s`;
  }

  return (
    <div className="score card">
      <div>
        <p className="section-header">Current Score:</p>
      </div>
      <div className="score-list">
        <ul>
          <li>
            Player X: {scoreHistory.playerXScore}{" "}
            {formatPlural(scoreHistory.playerXScore, "win")}
          </li>
          <li>
            Player O: {scoreHistory.playerOScore}{" "}
            {formatPlural(scoreHistory.playerOScore, "win")}
          </li>
          <li>
            Draws: {scoreHistory.drawScore}{" "}
            {formatPlural(scoreHistory.drawScore, "draw")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ScoreDisplay;
