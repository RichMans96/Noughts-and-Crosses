import React from 'react';
import './BoardCell.css';

const BoardCell = ({ fillCell }) => {
  return <div className='board-cell' onClick={fillCell}></div>;
};

export default BoardCell;
