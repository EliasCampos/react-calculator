import React from 'react';
import '../component-styles/DigitsPanel.css';

import Point from './Point.js';
import ResultButton from './ResultButton.js';

function DigitsPanel({addDigit, calculate, addPoint, poinIsClicked}) {
  const range = (start, end, seq) => start > end ?
    seq :
    range(start + 1, end, seq.concat([start])) ;
  const digitElements = range(0, 9, [])
    .map(number => (<button key={ number } className="digit">{ number }</button>));
  return (
    <div className="digits-panel" onClick={ addDigit }>
      { digitElements }
      <Point add={ addPoint } isClicked={ poinIsClicked } />
      <ResultButton calculate={ calculate } />
    </div>
  );
}

export default DigitsPanel;
