import React, { useState } from "react";

const Game = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [message, setMessage] = useState("");

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (index) => {
    if (boxes[index] || message) return; // Prevent further clicks if box is filled or game is over
    const newBoxes = [...boxes];
    newBoxes[index] = isXNext ? "X" : "O";
    setBoxes(newBoxes);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoxes);
    if (winner) {
      setMessage(`Congratulations, Winner is ${winner}`);
    } else if (newBoxes.every((box) => box)) {
      setMessage("Game was a Draw !!");
    }
  };

  const checkWinner = (boxes) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setIsXNext(true);
    setMessage("");
  };

  return (
    <div className="game-div">
      <div className={`msg-container ${message ? "" : "hide"}`}>
        <p id="msg">{message}</p>
        <button id="new-btn" onClick={resetGame}>
          New Game
        </button>
      </div>
      <main>
        <h1 id="heading">Tic-tac-toe Game</h1>
        <div className="container">
          <div className="game">
            {boxes.map((box, index) => (
              <button
                key={index}
                className="box"
                onClick={() => handleClick(index)}
                disabled={!!box || !!message} // Disable if the box is filled or game is over
              >
                {box}
              </button>
            ))}
          </div>
        </div>
        <button id="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </main>
    </div>
  );
};

export default Game;
