import React from 'react';
import BoardCell from './BoardCell/BoardCell';
import './Grid.css';

const Grid = ({ fillCell }) => {
  return (
    <div className='board-container'>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} id='1' />
        <BoardCell fillCell={fillCell} id='2' />
        <BoardCell fillCell={fillCell} id='3' />
      </div>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} id='4' />
        <BoardCell fillCell={fillCell} id='5' />
        <BoardCell fillCell={fillCell} id='6' />
      </div>
      <div className='board-row'>
        <BoardCell fillCell={fillCell} id='7' />
        <BoardCell fillCell={fillCell} id='8' />
        <BoardCell fillCell={fillCell} id='9' />
      </div>
    </div>
  );
};

export default Grid;
