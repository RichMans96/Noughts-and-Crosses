import React from 'react';
import './BoardCell.css';

const BoardCell = () => {
  return <div className='board-cell' onClick={() => console.log('click')}></div>;
};

export default BoardCell;
