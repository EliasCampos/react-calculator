import React, { Component } from 'react';
import './component-styles/App.css';

import DisplayPanel from './components/DisplayPanel.js';
import DigitsPanel from './components/DigitsPanel.js';
import ClearPanel from './components/ClearPanel.js';
import OperatorsPanel from './components/OperatorsPanel.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevNumber: null, // string
      currentNumber: "0", // string
      operator: null,
      isPoint: false,
      issue: null
    }

    this.unaryOperatorsFunctions = {
      opposite: x => -x,
      invert: x => 1 / x
    }

    this.binaryOperatorsFunctions = {
      add: (x, y) => x + y,
      subtract: (x, y) => x - y,
      multiply: (x, y) => x * y,
      divide: (x, y) => x / y
    }

    this.problematicPattern = /e?[+-]\d$/; // Like "-3", "1.11e-7".
  }

  // on digits' button click handler:
  addDigit = e => {
    if (e.target.className !== "digit") return;
    const newDigit = e.target.textContent.trim();
    const newNumber = this.state.currentNumber === "0" ?
      newDigit : this.state.currentNumber + newDigit ;
    this.setState({
      currentNumber: newNumber,
      issue: null
    });
  }

  // on clear buttons click handlers:
  clearDigit = () => {
    const digitsQuant = this.state.currentNumber.length;
    const lastDigit = this.state.currentNumber[digitsQuant - 1];
    // There could be some problematic case in the display,
    // like a: "-3"  or "1.11e-7".
    // In the first case, we need return "0", cause we cleared clearAll
    // In the second case, we need just drop part with "e", sign and last digit
    const problemMatch = this.problematicPattern.exec(this.state.currentNumber);
    const badCaseStart = problemMatch === null ?
      null
      : problemMatch[0][0];
    const newNumber = digitsQuant > 1 && badCaseStart !== "-" ?
      this.state.currentNumber.substring(0, digitsQuant - (!badCaseStart? 1:3))
      : "0" ; // Will be a zero if only one digit left (exclude minus)
    if (lastDigit === ".") {
      this.setState({
        currentNumber: newNumber,
        isPoint: false,
        issue: null
      });
    } else {
      this.setState({
        currentNumber: newNumber,
        issue: null
      });
    }
  }
  clearNumber = () => {
    this.setState({
      currentNumber: "0",
      isPoint: false,
      issue: null
    });
  }
  clearAll = () => {
    this.setState({
      prevNumber: null,
      currentNumber: "0",
      operator: null,
      isPoint: false,
      issue: null
    });
  }

  // on operators' buttons click handlers:
  setBinaryOperator = e => {
    const match = /binary-operator ([a-z]+)/.exec(e.target.className);
    if (match === null) return;
    const operatorType = match[1];

    const operator = {
      symbol: e.target.textContent.trim(),
      procedure: this.binaryOperatorsFunctions[operatorType]
    }

    const [prevNumber, currentNumber, isPoint] = this.state.operator === null ?
      [this.state.currentNumber, "0", false]
      : [this.state.prevNumber, this.state.currentNumber, this.state.isPoint];

    this.setState({
      prevNumber,
      currentNumber,
      operator,
      isPoint,
      issue: null
    });
  }
  operateNumber = e => {
    const match = /unary-operator ([a-z]+)/.exec(e.target.className);
    if (match === null) return;
    const operatorType = match[1];
    const procedure = this.unaryOperatorsFunctions[operatorType];
    const result = procedure(Number(this.state.currentNumber));
    const isPoint = !isNaN(result % 1) && result % 1 !== 0;
    const isBadResult = Math.abs(result) === Infinity;
    const issue = isBadResult ? "You can't divide by zero!" : null ;
    const resultString = isBadResult ?
      "0" :
      String(result) ;

    this.setState({
      currentNumber: resultString,
      isPoint,
      issue
    });
  }

  addPoint = e => {
    this.setState({
      isPoint: true,
      currentNumber: this.state.currentNumber + ".",
      issue: null
    });
  }

  calculateResult = e => {
    if (!this.state.operator) return;
    const result = this.state.operator.procedure(
      Number(this.state.prevNumber),
      Number(this.state.currentNumber)
    );
    const isPoint = !isNaN(result % 1) && result % 1 !== 0;
    const isOutOfRange = result > 1e+20;
    const isBadResult = (isNaN(result) || Math.abs(result) === Infinity);
    const issue = isBadResult ? "You can't divide by zero!"
      : (isOutOfRange ? "Out of range." : null) ;
    const resultString = isBadResult || isOutOfRange ?
      "0" :
      String(result) ;

    this.setState({
      prevNumber: null,
      currentNumber: resultString,
      operator: null,
      isPoint,
      issue
    });
  }

  render() {
    const { prevNumber, currentNumber, operator } = this.state;
    return (
      <div className="App">
        <DisplayPanel
          prevNum={ prevNumber }
          currentNum={ currentNumber }
          operator={ !operator ? null : operator.symbol }
          issue={ this.state.issue }
        />
        <ClearPanel
          clearDigit={ this.clearDigit }
          clearNumber={ this.clearNumber }
          clearAll={ this.clearAll }
        />
        <DigitsPanel
          addDigit={ this.addDigit }
          calculate={ this.calculateResult }
          addPoint={ this.addPoint }
          poinIsClicked={ this.state.isPoint }
        />
        <OperatorsPanel
          setOperator={ this.setBinaryOperator }
          operateNumber={ this.operateNumber }
        />
      </div>
    );
  }
}

export default App;
