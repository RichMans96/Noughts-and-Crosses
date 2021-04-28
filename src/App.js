import React, { useState } from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import ScoreCount from './Components/ScoreCount/ScoreCount';

function App() {
  const [playerTurn, setPlayerTurn] = useState({ player1: true, player2: false });

  function fillCell(e) {
    if (playerTurn.player1 === true && !e.target.innerHTML) {
      e.target.innerHTML = 'X';
      setPlayerTurn({ player1: false, player2: true });
    }
    if (playerTurn.player2 === true && !e.target.innerHTML) {
      e.target.innerHTML = 'O';
      setPlayerTurn({ player1: true, player2: false });
    }
  }

  return (
    <div className='App'>
      <h1>Noughts and Crosses</h1>
      <ScoreCount />
      <Grid fillCell={fillCell} />
    </div>
  );
}

export default App;
