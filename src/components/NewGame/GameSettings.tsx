import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import Checkbox from "../Checkbox";
import { useGameContext } from "../gameContext";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  startGameHandler: () => void;
}

export default function GameSettings({ startGameHandler }: Props) {
  const { gameSettings, setGameSettings } = useGameContext();

  const lifelineHandler = (event) => {
    const isChecked = event.target.checked;
    const newSettings = {
      ...gameSettings,
      lifelines: isChecked,
    };
    setGameSettings(newSettings);
  };

  return (
    <StyledContainer>
      <Checkbox
        label="Lifelines"
        name="lifelines"
        isChecked={gameSettings.lifelines}
        onChange={lifelineHandler}
      />
      <Button onClick={startGameHandler}>Start</Button>
    </StyledContainer>
  );
}
