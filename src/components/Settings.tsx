import React from "react";
import BoxContainer from "./BoxContainer";
import Checkbox from "./Checkbox";

interface Props {
  musicSettingsHandler: React.ChangeEvent<HTMLInputElement>;
  soundSettingsHandler: React.ChangeEvent<HTMLInputElement>;
  music: boolean;
  sound: boolean;
}

export default function Settings({
  musicSettingsHandler,
  soundSettingsHandler,
  music,
  sound
}: Props) {
  return (
    <>
      <header className="App-header">
        <h1>Settings</h1>
      </header>
      <BoxContainer showBackButton={true}>
        <Checkbox
          label="Music"
          name="music"
          isChecked={music}
          onChange={musicSettingsHandler}
        />
        <Checkbox
          label="Sound"
          name="sound"
          isChecked={sound}
          onChange={soundSettingsHandler}
        />
      </BoxContainer>
    </>
  );
}
