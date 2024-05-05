// Game.js
import React, { useState } from 'react';
import Board from './Board';
import styles from './Game.module.css';  

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Prevents click action if the game is over or square is already filled
  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return; 
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (!squares.includes(null)) {
    status = 'Draw'; // Check if all squares are filled and no winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  
  return (
    <div className={styles.game}>
      <h1 className={styles.title}>Tic-Tac-Tango</h1>
      <div className={styles.status}>{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button className={styles.restartButton} onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

export default Game;
