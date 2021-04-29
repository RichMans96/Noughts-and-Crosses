import React from 'react';
import './ScoreCount.css';

const ScoreCount = ({ playerScore, playerTurn }) => {
  return (
    <div className='score-container'>
      <div className={playerTurn.player1 ? 'active' : 'player1'}>
        <h1>Player 1: {playerScore.player1}</h1>
      </div>
      <div className={playerTurn.player2 ? 'active' : 'player2'}>
        <h1>Player 2: {playerScore.player2}</h1>
      </div>
    </div>
  );
};

export default ScoreCount;
