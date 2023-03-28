import React, { useState } from "react";
import GameCard from "./components/GameCard.js";
import artemis from "./img/artemisEdit.png";
import diana from "./img/dianaEdit.png";
import diva from "./img/divaEdit.png";
import luna from "./img/lunaEdit.png";
import peaches from "./img/peachesEdit.png";
import zoey from "./img/zoeyEdit.png";
import "./App.css";

const gameImages = [
  { src: artemis },
  { src: diana },
  { src: diva },
  { src: luna },
  { src: peaches },
  { src: zoey },
];

export default function App() {
  const [gamePieces, setGamePieces] = useState([]);

  const shuffle = () => {
    const shuffle = [...gameImages, ...gameImages]
      .sort(() => Math.random())
      .map((gamePiece) => ({ ...gamePiece, id: Math.random() }));

    setGamePieces(shuffle);
  };

  console.log(gamePieces);

  //match

  //disable

  //count turns

  return (
    <div>
      <h1>MATCH GAME</h1>
      <button onClick={shuffle}>Reset Game</button>

      <div className="gameArea">
        {gamePieces.map((gamePiece) => (
          <GameCard key={gamePiece.id} gamePiece={gamePiece} />
        ))}
      </div>
    </div>
  );
}
