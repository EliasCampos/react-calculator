import React from 'react';
import '../component-styles/OperatorsPanel.css';

function OperatorsPanel({ setOperator, operateNumber }) {
  return (
    <div className="operators-panel">
      <div onClick={ setOperator }>
        <button className="binary-operator add">{ "+" }</button>
        <button className="binary-operator subtract">{ "-" }</button>
        <button className="binary-operator multiply">{ "*" }</button>
        <button className="binary-operator divide">&divide;</button>
      </div>
      <div  onClick={ operateNumber }>
        <button className="unary-operator opposite">&plusmn;</button>
        <button className="unary-operator invert">{ "1/x" }</button>
      </div>
    </div>
  );
}

export default OperatorsPanel;
