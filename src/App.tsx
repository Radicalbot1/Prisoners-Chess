import React from 'react';
import ChessBoard from './ChessBoard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Klob Funny Mode
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Never Learn React
        </a>
      </header>
      <body> 
        <ChessBoard />
      </body>
    </div>
  );
}

export default App;
