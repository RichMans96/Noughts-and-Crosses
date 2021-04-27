import React from 'react';
import './ScoreCount.css';

const ScoreCount = () => {
  return (
    <div className='score-container'>
      <div className='player-one'>
        <h1>Player 1: 0</h1>
      </div>
      <div className='player-two'>
        <h1>Player 2: 0</h1>
      </div>
    </div>
  );
};

export default ScoreCount;
