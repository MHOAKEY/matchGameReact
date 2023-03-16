import React from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

function clickCard(cardValue) {
  console.log(cardValue);
}

export default function GameCard(props) {
  return (
    <div className="gameCard">
      <img
        src={reactLogo}
        onClick={() => clickCard(props.face)}
        width="200px"
      ></img>
    </div>
  );
}
