import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import GitHubHeader from './components/GitHubHeader'
import Calculator from './components/Calculator.js'

function App() {
  return (
    <div className="App">
      <GitHubHeader title="Calculator Demo" avatar="jefeish"/>
      <div className="MainContent">
        {/* Calculator */}

      </div>
    </div>
  );
}

export default App;
