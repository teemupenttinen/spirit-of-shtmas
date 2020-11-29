import React from "react";
import BoxContainer from "./BoxContainer";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";

export default function Guide() {
  return (
    <>
      <header className="App-header">
        <h1>Guide</h1>
      </header>
      <BoxContainer showBackButton={true}>
        <Link to="/game">
          <Button>Game</Button>
        </Link>
        <Link to="/rules">
          <Button>Rules</Button>
        </Link>
      </BoxContainer>
    </>
  );
}
