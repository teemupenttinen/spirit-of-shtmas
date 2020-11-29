import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  backgroundColor?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.red};
  margin: 20px auto;
  width: 100%;
  max-width: 360px;
  height: 5rem;
  border-radius: 10px;
  color: white;
  font-size: 1.5em;
  border: 3px solid rgba(85, 23, 23, 0.384);
  @media only screen and (max-width: $breakpoint-tablet) and (orientation: landscape) {
    margin: 0 10px;
  }

  &:hover {
    background-color: #362f97;
  }
`;

export default function Button({
  onClick,
  children,
}: React.PropsWithChildren<Props>) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
