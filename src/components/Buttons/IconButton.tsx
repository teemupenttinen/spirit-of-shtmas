import React from "react";
import styled from "styled-components";

interface Props {
  onClick?: () => void;
  icon: any;
}
const StyledButton = styled.button`
  background: url(${(props) => props.icon});
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
export default function Button({
  onClick,
  icon,
  children,
}: React.PropsWithChildren<Props>) {
  return <StyledButton icon={icon} onClick={onClick}>{children}</StyledButton>;
}
