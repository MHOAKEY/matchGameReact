import "./App.css";
import reactLogo from "./img/reactLogo.png";

function clickCard() {
  console.log("clicked");
}

function App() {
  return (
    <div>
      <h1>MATCH GAME</h1>
      <h3>How quick can you match them all?!</h3>
      <div className="gameArea">
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
        <img src={reactLogo} onClick={clickCard}></img>
      </div>
      <div></div>
    </div>
  );
}

export default App;
