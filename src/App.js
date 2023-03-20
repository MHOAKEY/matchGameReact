import "./App.css";
import GameCard from "./components/GameCard";
import artemis from "./img/artemisEdit.png";
import diana from "./img/dianaEdit.png";
import diva from "./img/divaEdit.png";
import luna from "./img/lunaEdit.png";
import peaches from "./img/peachesEdit.png";
import zoey from "./img/zoeyEdit.png";

export default function App() {
  const gameCards = [
    artemis,
    artemis,
    diana,
    diana,
    diva,
    diva,
    luna,
    luna,
    peaches,
    peaches,
    zoey,
    zoey,
  ];
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
