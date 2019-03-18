import React, { Component } from 'react';
import '../component-styles/DigitsPanel.css';

import Point from './Point.js';
import ResultButton from './ResultButton.js';

function DigitsPanel() {
  const range = (start, end, seq) => start > end ?
    seq :
    range(start + 1, end, seq.concat([start])) ;
  const digitElements = range(0, 9, [])
    .map(number => (<button>{ number }</button>));
  return (
    <div className="digits-panel">
      { digitElements }
      <Point />
      <ResultButton />
    </div>
  );
}

export default DigitsPanel;
