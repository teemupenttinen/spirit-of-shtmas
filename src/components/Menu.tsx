import React from "react";
import Button from "./Button/Button";
import styled from "styled-components";

export default function Menu() {
  const StyledMenu = styled.div`
    margin: 5% auto;
    background-color: rgba(255, 255, 255, 0.5);
    border: 10px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 40px;
    width: 50%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 10px black;
    @media only screen and (max-width: $breakpoint-tablet) and (orientation: landscape) {
      flex-direction: row;
    }
  `;
  return (
    <StyledMenu>
      <Button>Start</Button>
      <Button>Guide</Button>
      <Button>Settings</Button>
    </StyledMenu>
  );
}
