// Board.js
import React from 'react';
import Square from './Square';
import styles from './Board.module.css'; 

function Board({ squares, onClick }) {
  const box = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      <div className={styles.boardRow}>{box(0)}{box(1)}{box(2)}</div>
      <div className={styles.boardRow}>{box(3)}{box(4)}{box(5)}</div>
      <div className={styles.boardRow}>{box(6)}{box(7)}{box(8)}</div>
    </div>
  );
}

export default Board;
