import React from "react";
import "./App.scss";
import Snowflakes from './components/Snowflakes/Snowflakes';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spirit of Shitmas</h1>
      </header>
      <Menu/>
      <Snowflakes/>
    </div>
  );
}

export default App;
