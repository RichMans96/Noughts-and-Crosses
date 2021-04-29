import React from 'react';
import './ResetButton.css';

const ResetButton = ({ reset, status }) => {
  return (
    <div className='btn-container'>
      <button onClick={reset} className='btn-reset'>
        {status ? 'Play Again?' : 'Reset'}
      </button>
    </div>
  );
};

export default ResetButton;
