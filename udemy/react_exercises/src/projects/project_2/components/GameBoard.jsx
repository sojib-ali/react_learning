import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = (onSelectSquare, activePlayerSymbol) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(colIndex, rowIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][colIndex] = { activePlayerSymbol };
      return updateBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(colIndex, rowIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
