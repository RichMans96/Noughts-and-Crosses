import React from 'react';
import './BoardCell.css';

const BoardCell = ({ fillCell, id }) => {
  return <div className='board-cell' onClick={fillCell} id={id}></div>;
};

export default BoardCell;
