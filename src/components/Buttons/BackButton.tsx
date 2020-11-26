import React from "react";
import styled from "styled-components";
import BackIcon from "../../assets/svg/arrowback.svg";

interface Props {
  onClick?: () => void;
}

export default function Button({
  onClick,
  children,
}: React.PropsWithChildren<Props>) {
  const StyledButton = styled.button`
    background: url(${BackIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin: 5px auto;
    height: 7vh;
    width: 7vw;
    color: white;
    border: none;
    @media only screen and (max-width: $breakpoint-tablet) and (orientation: landscape) {
      margin: 0 10px;
    }

    &:focus {
      outline: 0;
    }
  `;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
