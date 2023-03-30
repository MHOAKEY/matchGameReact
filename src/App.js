import React, { useEffect, useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard.js";

const cardImages = [
  { src: "/img/artemisEdit.png" },
  { src: "/img/dianaEdit.png" },
  { src: "/img/divaEdit.png" },
  { src: "/img/lunaEdit.png" },
  { src: "/img/peachesEdit.png" },
  { src: "/img/zoeyEdit.png" },
];

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="center">
      <h1>MATCH GAME</h1>
      <button onClick={shuffleCards}>Reset Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <GameCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
