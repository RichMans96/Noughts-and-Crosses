import React from 'react';
import './ResetButton.css';

const ResetButton = ({ reset, status }) => {
  return (
    <button onClick={reset} className={status ? 'active' : 'hidden'}>
      Play again?
    </button>
  );
};

export default ResetButton;
