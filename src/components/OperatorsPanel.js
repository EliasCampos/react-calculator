import React, { Component } from 'react';
import '../component-styles/OperatorsPanel.css';

function OperatorsPanel() {
  return (
    <div className="operators-panel">
      <button>{ "+" }</button>
      <button>{ "-" }</button>
      <button>{ "*" }</button>
      <button>&divide;</button>
      <button>&plusmn;</button>
      <button>&#37;</button>
    </div>
  );
}

export default OperatorsPanel;
