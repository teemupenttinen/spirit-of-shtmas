import React from "react";
import BoxContainer from "./BoxContainer";
import Button from "./Buttons/Button";

export default function Guide() {
  return (
    <>
      <header className="App-header">
        <h1>Guide</h1>
      </header>
      <BoxContainer showBackButton={true}>
        <Button>Game</Button>
        <Button>Rules</Button>
      </BoxContainer>
    </>
  );
}
