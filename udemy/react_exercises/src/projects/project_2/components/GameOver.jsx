const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
