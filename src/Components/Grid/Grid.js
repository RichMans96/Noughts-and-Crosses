import React from 'react';
import BoardCell from './BoardCell/BoardCell';
import './Grid.css';

const Grid = () => {
  return (
    <div className='board-container'>
      <div className='board-row'>
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </div>
      <div className='board-row'>
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </div>
      <div className='board-row'>
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </div>
    </div>
  );
};

export default Grid;
