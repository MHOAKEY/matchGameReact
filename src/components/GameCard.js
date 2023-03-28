import React, { useState } from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

export default function GameCard(props) {
  return (
    <div>
      <div>
        <img className="cardFaceUp" src={} alt="" />
        <img className="cardFaceDown" src={reactLogo} alt="" />
      </div>
    </div>
  )
}
