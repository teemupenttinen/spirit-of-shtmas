import React from "react";
import "./App.scss";
import Snowflakes from './components/Snowflakes/Snowflakes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spirit of Shitmas</h1>
      </header>
      <div className="Menu">
        <button>Start</button>
        <button>Guide</button>
        <button>Settings</button>
      </div>
      <Snowflakes/>
    </div>
  );
}

export default App;
