import React, { useState } from "react";
import styled from "styled-components";
import Timer from "../Timer";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
`;


interface Props {
  countdownElapsed: () => void
}

export default function Countdown({countdownElapsed}: Props) {

  return (
    <StyledContainer>
      <h3>Game starting</h3>
      <Timer time={10} timerElapsed={countdownElapsed}></Timer>
    </StyledContainer>
  );
}
