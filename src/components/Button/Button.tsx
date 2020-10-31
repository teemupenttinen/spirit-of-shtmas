import React from "react";
import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  onClick?: () => void;
}

export default function Button({ backgroundColor, onClick, children }: React.PropsWithChildren<Props>) {
  const StyledButton = styled.button`
    background: ${backgroundColor ?? '#AC3E3E'};
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
  `;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
