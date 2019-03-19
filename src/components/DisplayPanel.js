import React from 'react';
import '../component-styles/DisplayPanel.css';

function DisplayPanel({prevNum, currentNum, operator, issue}) {
  return (
    <div className="display-panel">
      <div>
        <p className="prev-num">{ prevNum }</p>
        <p className="current-operator">{ operator }</p>
        <p className="calculation-issue">{ issue }</p>
      </div>
      <div>
        <p className="current-num">{ currentNum }</p>
      </div>
    </div>
  );
}

export default DisplayPanel;
