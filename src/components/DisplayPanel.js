import React, {Component} from 'react';
import '../component-styles/DisplayPanel.css';

function DisplayPanel({prevNum, currentNum, operator}) {
  return (
    <div className="display-panel">
      <div>
        <p className="prev-num">{ prevNum }</p>
        <p className="operator">{ operator }</p>
      </div>
      <div>
        <p className="current-num">{ currentNum }</p>
      </div>
    </div>
  );
}

export default DisplayPanel;
