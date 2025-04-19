import "./styles/tic_tac.css";
import gamelogo from "./imgs/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

const TicTacTo = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <header>
        <img src={gamelogo} alt="tic-tac-toe logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <menu>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player-1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="Player-2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </menu>
    </>
  );
};

export default TicTacTo;
