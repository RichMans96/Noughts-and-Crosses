import React from 'react';
import './ScoreCount.css';

const ScoreCount = ({ playerScore }) => {
  return (
    <div className='score-container'>
      <div className='player-one'>
        <h1>Player 1: {playerScore.player1}</h1>
      </div>
      <div className='player-two'>
        <h1>Player 2: {playerScore.player2}</h1>
      </div>
    </div>
  );
};

export default ScoreCount;
