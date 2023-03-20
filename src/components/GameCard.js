import React, { useState } from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

// function clickCard(cardValue) {
//   console.log(cardValue);
// }

export default function GameCard(props) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <div onClick={() => setClicked(!clicked)}>
        <img src={props.face} className="gameCard--flipped" />
      </div>
    );
  }
  return (
    <div className="gameCard">
      <img
        src={reactLogo}
        onClick={() => setClicked(!clicked)}
        width="200px"
      ></img>
    </div>
  );
}
