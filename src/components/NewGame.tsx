import React, { useState } from "react";
import BoxContainer from "./BoxContainer";
import Countdown from "./NewGame/Countdown";
import GameSettings from "./NewGame/GameSettings";
import Players from "./NewGame/Players";

enum SubNav {
  Players,
  GameSettings,
  Countdown,
}

export default function NewGame() {
  const [subNavPosition, setSubNav] = useState(0);
  const continueFromPlayersHandler = () => {
    setSubNav(SubNav.GameSettings);
  };

  const startGameHandler = () => {
    setSubNav(SubNav.Countdown);
  };

  const countdownElapsed = () => {
    console.log("START GAME");
  };

  return (
    <>
      <header className="App-header">
        <h1>New game</h1>
      </header>
      <BoxContainer
        showBackButton={subNavPosition === SubNav.Countdown ? false : true}
      >
        {subNavPosition === SubNav.Players ? (
          <Players continueHandler={continueFromPlayersHandler}></Players>
        ) : subNavPosition === SubNav.GameSettings ? (
          <GameSettings startGameHandler={startGameHandler}></GameSettings>
        ) : (
          <Countdown countdownElapsed={countdownElapsed}></Countdown>
        )}
      </BoxContainer>
    </>
  );
}
