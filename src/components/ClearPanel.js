import React, { Component } from 'react';
import '../component-styles/ClearPanel.css';

function ClearPanel() {
  return (
    <div className="clear-panel">
      <button>{ "<--" }</button>
      <button>C</button>
      <button>CE</button>
    </div>
  );
}

export default ClearPanel;
