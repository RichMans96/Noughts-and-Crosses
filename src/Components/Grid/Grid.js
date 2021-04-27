import React from 'react';
import './Grid.css';

const Grid = () => {
  return (
    <div className='board-container'>
      <div className='board-row'>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
      </div>
      <div className='board-row'>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
      </div>
      <div className='board-row'>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
        <div className='board-cell'></div>
      </div>
    </div>
  );
};

export default Grid;
