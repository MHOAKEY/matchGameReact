import React, { useState } from "react";
import "./App.css";

const gameImages = [
  { src: "./img/artemisEdit.png" },
  { src: "./img/dianaEdit.png" },
  { src: "./img/divaEdit.png" },
  { src: "./img/lunaEdit.png" },
  { src: "./img/peachesEdit.png" },
  { src: "./img/zoeyEdit.png" },
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
    <div className="gameArea">
      <h1>MATCH GAME</h1>
      <button onClick={shuffle}>Reset Game</button>
    </div>
  );
}
