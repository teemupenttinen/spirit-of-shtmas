import React from "react";
import Button from "./Buttons/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function Menu() {
  return (
    <StyledMenu>
      <Link to="/">
        <Button>Start</Button>
      </Link>
      <Link to="/guide">
        <Button>Guide</Button>
      </Link>
      <Link to="/settings">
        <Button>Settings</Button>
      </Link>
    </StyledMenu>
  );
}
