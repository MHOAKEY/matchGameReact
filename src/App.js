import "./App.css";
import GameCard from "./components/GameCard";

export default function App() {
  const gameCards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  return (
    <div>
      <h1>MATCH GAME</h1>
      <h3>How quick can you match them all?!</h3>
      <div className="gameArea">
        {gameCards.map((item) => {
          return <GameCard face={item} />;
        })}
      </div>
      <div></div>
    </div>
  );
}
