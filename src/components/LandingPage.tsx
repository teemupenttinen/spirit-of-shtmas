import React from "react";
import Snowflakes from "./Snowflakes/Snowflakes";
import Menu from "./Menu";

export default function LandingPage() {
  return (
    <>
      <header className="App-header">
        <h1>Spirit of Shitmas</h1>
      </header>
      <Menu />
      <Snowflakes />
    </>
  );
}
