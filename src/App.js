import React, { Component } from 'react';
import './component-styles/App.css';

import DisplayPanel from './components/DisplayPanel.js';
import DigitsPanel from './components/DigitsPanel.js';
import ClearPanel from './components/ClearPanel.js';
import OperatorsPanel from './components/OperatorsPanel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayPanel prevNum="0" currentNum="0" operator="+" />
        <ClearPanel />
        <DigitsPanel />
        <OperatorsPanel />
      </div>
    );
  }
}

export default App;
