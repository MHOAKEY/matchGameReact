import React, { useState } from "react";
import reactLogo from "../img/reactLogo.png";
import "./GameCard.css";

function clickCard(props) {
  props.eachClick((previousValue) => {
    return {
      ...previousValue,
      count: previousValue.count + 1,
    };
  });

  if (props.state.firstCard === "") {
    props.eachClick((previousValue) => {
      return { ...previousValue, firstCard: props.face };
    });
  } else if (props.state.firstCard !== "" && props.state.secondCard === "") {
    props.eachClick((previousValue) => {
      return { ...previousValue, secondCard: props.face };
    });
  }
}

export default function GameCard(props) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <div onClick={() => setClicked(!clicked)}>
        <img
          src={props.face}
          className="gameCard--flipped"
          alt="gameCardFaceUp"
        />
      </div>
    );
  }
  return (
    <div className="gameCard">
      <img
        src={reactLogo}
        onClick={() => {
          setClicked(!clicked);
          clickCard(props);
        }}
        width="200px"
        alt="gameCardFaceDown"
      />
    </div>
  );
}
