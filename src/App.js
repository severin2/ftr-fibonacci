import './App.css';

import React from 'react';

import logo from './logo.svg';
import NumberInput from './number-input/NumberInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberInput></NumberInput>
      </header>
    </div>
  );
}

export default App;
