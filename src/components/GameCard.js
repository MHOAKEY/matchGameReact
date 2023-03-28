import React, { useState } from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

export default function GameCard({ gamePiece }) {
  return (
    <div className="gamePiece" key={gamePiece.id}>
      <div>
        <img className="cardFaceUp" src={gamePiece.src} alt="gamePieceFaceUp" />
        <img className="cardFaceDown" src={reactLogo} alt="reactLogo" />
      </div>
    </div>
  );
}
