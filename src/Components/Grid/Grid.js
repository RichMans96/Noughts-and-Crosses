import React from 'react';
import BoardCell from './BoardCell/BoardCell';
import './Grid.css';

const Grid = ({ fillCell }) => {
  return (
    <div className='board-container'>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
      </div>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
      </div>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
        <BoardCell fillCell={fillCell} />
      </div>
    </div>
  );
};

export default Grid;
