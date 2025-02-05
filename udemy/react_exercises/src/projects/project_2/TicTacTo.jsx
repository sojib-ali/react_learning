import "./styles/tic_tac.css";
import gamelogo from "./imgs/game-logo.png";
import Player from "./components/Player";

const TicTacTo = () => {
  return (
    <>
      <header>
        <img src={gamelogo} alt="tic-tac-toe logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <menu>
        <div id="game-container">
          <ol id="players">
            <Player name="Player-1" symbol="X" />
            <Player name="Player-2" symbol="0" />
          </ol>
        </div>
      </menu>
    </>
  );
};

export default TicTacTo;
