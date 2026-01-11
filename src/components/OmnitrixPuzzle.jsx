import React, { useState, useEffect } from "react";
import "./OmnitrixPuzzle.css";
import Navbar from "./Navbar";

// Simple 3x3 sliding puzzle using alien images
const size = 3;
const total = size * size;

const createSolved = () => {
  const arr = Array.from({ length: total }, (_, i) => i);
  return arr;
};

const shuffle = (arr) => {
  // Fisher-Yates shuffle but ensure solvable by performing valid moves from solved state
  const res = arr.slice();
  // perform random valid moves
  const moves = 1000;
  const dirs = ["up", "down", "left", "right"];
  let emptyIndex = res.indexOf(total - 1);
  for (let i = 0; i < moves; i++) {
    const r = dirs[Math.floor(Math.random() * dirs.length)];
    const eRow = Math.floor(emptyIndex / size);
    const eCol = emptyIndex % size;
    let swapIndex = -1;
    if (r === "up" && eRow < size - 1) swapIndex = emptyIndex + size;
    if (r === "down" && eRow > 0) swapIndex = emptyIndex - size;
    if (r === "left" && eCol < size - 1) swapIndex = emptyIndex + 1;
    if (r === "right" && eCol > 0) swapIndex = emptyIndex - 1;
    if (swapIndex >= 0) {
      [res[emptyIndex], res[swapIndex]] = [res[swapIndex], res[emptyIndex]];
      emptyIndex = swapIndex;
    }
  }
  return res;
};

const OmnitrixPuzzle = ({ onBack, onNavigate }) => {
  const [board, setBoard] = useState(createSolved());
  const [solved, setSolved] = useState(true);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setBoard(shuffle(createSolved()));
    setMoves(0);
  }, []);

  useEffect(() => {
    setSolved(board.every((v, i) => v === i));
  }, [board]);

  const indexToRowCol = (idx) => ({ r: Math.floor(idx / size), c: idx % size });

  const tryMove = (idx) => {
    const emptyIdx = board.indexOf(total - 1);
    const { r: er, c: ec } = indexToRowCol(emptyIdx);
    const { r, c } = indexToRowCol(idx);
    const dist = Math.abs(er - r) + Math.abs(ec - c);
    if (dist === 1) {
      const nb = board.slice();
      [nb[emptyIdx], nb[idx]] = [nb[idx], nb[emptyIdx]];
      setBoard(nb);
      setMoves((m) => m + 1);
    }
  };

  const handleShuffle = () => {
    setBoard(shuffle(createSolved()));
    setMoves(0);
  };

  return (
    <div className="puzzle-root">
      <Navbar onNavigate={onNavigate} />
      <div className="puzzle-container">
        <div className="puzzle-header">
          <h1>Omnitrix Puzzle</h1>
          <p>Slide tiles to restore the Omnitrix sequence. Solve the puzzle with style!</p>
          <div className="puzzle-controls">
            <button className="btn action" onClick={handleShuffle}>Shuffle</button>
            <button className="btn back" onClick={() => onBack && onBack()}>Back</button>
            <div className="stats">Moves: <span>{moves}</span></div>
          </div>
        </div>

        <div className={`puzzle-board ${solved ? 'solved' : ''}`}>
          {board.map((v, i) => {
            const src = v === total - 1 ? null : `/images/alien${(v % 6) + 1}.png`;
            return (
              <div
                key={i}
                className={`tile ${src ? '' : 'empty'}`}
                onClick={() => tryMove(i)}
                style={{
                  transform: `translateZ(40px)`
                }}
              >
                {src ? <img src={src} alt={`tile-${v}`} /> : <div className="empty-slot"/>}
              </div>
            );
          })}
        </div>

        <div className="puzzle-footer">
          {solved ? <div className="solved-banner">Solved! Omnitrix Restored ✨</div> : <div className="hint">Tip: Click a tile next to the empty slot</div>}
        </div>
      </div>
    </div>
  );
};

export default OmnitrixPuzzle;
