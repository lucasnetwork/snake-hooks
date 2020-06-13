import React from 'react';
import Game from './components/GameArea'
import logo from './images/react.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={logo} alt="logo"/>
        <h1 >Snake-hooks</h1>
      </div>
      <Game/>
    </div>
  );
}
export default App;
