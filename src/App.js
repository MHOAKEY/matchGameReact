import React, { useState } from "react";
import "./App.css";

const gamePeices = [
  { src: "./img/artemisEdit.png" },
  { src: "./img/dianaEdit.png" },
  { src: "./img/divaEdit.png" },
  { src: "./img/lunaEdit.png" },
  { src: "./img/peachesEdit.png" },
  { src: "./img/zoeyEdit.png" },
  { src: "./img/reactLogo.png" },
  { src: "./components/GameCard" },
];

export default function App() {
  //shuffle

  //match

  //disable

  //count turns

  return (
    <div className="gameArea">
      <h1>MATCH GAME</h1>
      <button>Reset Game</button>
    </div>
  );
}
