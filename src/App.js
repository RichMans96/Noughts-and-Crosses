import React, { useState } from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import ResetButton from './Components/Misc/ResetButton';
import ScoreCount from './Components/ScoreCount/ScoreCount';

function App() {
  const [playerTurn, setPlayerTurn] = useState({ player1: true, player2: false });
  const [playerScore, setPlayerScore] = useState({ player1: 0, player2: 0 });
  const [gameStatus, setGameStatus] = useState(false);
  const [gameBoard, setGameBoard] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  function clearBoard() {
    const boardCells = document.querySelectorAll('.board-cell');
    boardCells.forEach((cell) => {
      cell.innerHTML = '';
    });
    setGameBoard([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
    setGameStatus(false);
  }

  function gameWon() {
    const noughtsWin =
      (gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1) ||
      (gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1) ||
      (gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1) ||
      (gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1) ||
      (gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1) ||
      (gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1) ||
      (gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1) ||
      (gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1);

    const crossesWin =
      (gameBoard[0][0] === 0 && gameBoard[0][1] === 0 && gameBoard[0][2] === 0) ||
      (gameBoard[1][0] === 0 && gameBoard[1][1] === 0 && gameBoard[1][2] === 0) ||
      (gameBoard[2][0] === 0 && gameBoard[2][1] === 0 && gameBoard[2][2] === 0) ||
      (gameBoard[0][0] === 0 && gameBoard[1][0] === 0 && gameBoard[2][0] === 0) ||
      (gameBoard[0][1] === 0 && gameBoard[1][1] === 0 && gameBoard[2][1] === 0) ||
      (gameBoard[0][2] === 0 && gameBoard[1][2] === 0 && gameBoard[2][2] === 0) ||
      (gameBoard[0][0] === 0 && gameBoard[1][1] === 0 && gameBoard[2][2] === 0) ||
      (gameBoard[0][2] === 0 && gameBoard[1][1] === 0 && gameBoard[2][0] === 0);

    if (noughtsWin) {
      const boardCells = document.querySelectorAll('.board-cell');

      if (gameStatus === false) {
        setPlayerScore((prevPlayerScore) => {
          return { ...prevPlayerScore, player1: prevPlayerScore.player1 + 1 };
        });
      }

      setGameStatus(true);

      boardCells.forEach((cell) => {
        if (cell.innerHTML === '') {
          cell.innerHTML = ' ';
        }
      });
    }

    if (crossesWin) {
      const boardCells = document.querySelectorAll('.board-cell');

      if (gameStatus === false) {
        setPlayerScore((prevPlayerScore) => {
          return { ...prevPlayerScore, player2: prevPlayerScore.player2 + 1 };
        });
      }

      setGameStatus(true);

      boardCells.forEach((cell) => {
        if (cell.innerHTML === '') {
          cell.innerHTML = ' ';
        }
      });
    }
  }

  function fillCell(e) {
    gameWon();
    if (playerTurn.player1 === true && !e.target.innerHTML) {
      switch (e.target.id) {
        case '1':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][0] = 1)];
          });
          break;
        case '2':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][1] = 1)];
          });
          break;
        case '3':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][2] = 1)];
          });
          break;
        case '4':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][0] = 1)];
          });
          break;
        case '5':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][1] = 1)];
          });
          break;
        case '6':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][2] = 1)];
          });
          break;
        case '7':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][0] = 1)];
          });
          break;
        case '8':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][1] = 1)];
          });
          break;
        case '9':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][2] = 1)];
          });
          break;
        default:
          break;
      }
      e.target.innerHTML = 'O';
      setPlayerTurn({ player1: false, player2: true });
    }
    if (playerTurn.player2 === true && !e.target.innerHTML) {
      switch (e.target.id) {
        case '1':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][0] = 0)];
          });
          break;
        case '2':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][1] = 0)];
          });
          break;
        case '3':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[0][2] = 0)];
          });
          break;
        case '4':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][0] = 0)];
          });
          break;
        case '5':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][1] = 0)];
          });
          break;
        case '6':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[1][2] = 0)];
          });
          break;
        case '7':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][0] = 0)];
          });
          break;
        case '8':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][1] = 0)];
          });
          break;
        case '9':
          setGameBoard((prevGameBoard) => {
            return [...prevGameBoard, (prevGameBoard[2][2] = 0)];
          });
          break;
        default:
          break;
      }
      e.target.innerHTML = 'X';
      setPlayerTurn({ player1: true, player2: false });
    }
  }

  return (
    <div className='App'>
      <h1>Noughts and Crosses</h1>
      <ScoreCount playerScore={playerScore} playerTurn={playerTurn} />
      <Grid fillCell={fillCell} />
      <ResetButton reset={clearBoard} status={gameStatus} />
    </div>
  );
}

export default App;
