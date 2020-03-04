import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setName(data.name);
    });
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Run it by "yarn dev" (two terminals in one)</p>
        <p>The current time is: {currentTime}</p>
        <p>The name is: {name}</p>

      </header>
    </div>
  );
}

export default App;
