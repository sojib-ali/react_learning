import "./styles/tic_tac.css";
import gamelogo from "./imgs/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

const TicTacTo = () => {
  const [gameTurn, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
        </div>
        <Log />
      </menu>
    </>
  );
};

export default TicTacTo;
