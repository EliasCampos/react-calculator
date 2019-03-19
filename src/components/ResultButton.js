import React from 'react';

function ResultButton({ calculate }) {
  return (
    <button className="result-button" onClick={ calculate }>
    =
    </button>
  );
}

export default ResultButton;
