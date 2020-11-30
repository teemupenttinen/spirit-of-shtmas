import React from "react";
import BoxContainer from "./BoxContainer";
import Players from "./Game/Players";


export default function NewGame() {
  return (
    <>
      <header className="App-header">
        <h1>New game</h1>
      </header>
      <BoxContainer showBackButton={true}>
        <Players></Players>
      </BoxContainer>
    </>
  );
}
