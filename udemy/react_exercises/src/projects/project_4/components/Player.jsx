import { useState, useRef } from "react";

export default function Player() {
  const[nameSubmit, setNameSubmit] = useState(null);

  const playerName = useRef()

  function handleSetName(){
    setNameSubmit(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {nameSubmit ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
