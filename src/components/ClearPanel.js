import React from 'react';
import '../component-styles/ClearPanel.css';

function ClearPanel({ clearDigit, clearNumber, clearAll }) {
  return (
    <div className="clear-panel">
      <button onClick={ clearDigit }>&larr;</button>
      <button onClick={ clearNumber }>C</button>
      <button onClick={ clearAll }>CE</button>
    </div>
  );
}

export default ClearPanel;
