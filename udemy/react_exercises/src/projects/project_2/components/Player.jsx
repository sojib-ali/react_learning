import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isPressed, setIspressed] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIspressed((pressed) => !pressed);
    if (isPressed) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "activ" : undefined}>
      <span className="player">
        <span className="player-name">
          {isPressed ? (
            <input
              type="text"
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />
          ) : (
            playerName
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isPressed ? "save" : "edit"}</button>
    </li>
  );
};

export default Player;
