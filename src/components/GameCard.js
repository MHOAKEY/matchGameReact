import React from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

function clickCard() {
  console.log("clicked");
}

export default function GameCard(props) {
  return (
    <div className="gameCard">
      <img src={reactLogo} onClick={clickCard} width="200px"></img>
    </div>
  );
}
