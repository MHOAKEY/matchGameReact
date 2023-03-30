import React, { useState } from "react";
import "./GameCard.css";

export default function GameCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/reactLogo.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
