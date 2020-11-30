import React from "react";
import styled from "styled-components";
import IconButton from "./Buttons/IconButton";
import BackIcon from "../assets/svg/arrowback.svg";

interface Props {
  showBackButton?: string;
  onClick?: () => void;
}

const Container = styled.div`
  margin: 5% auto;
  background-color: rgba(255, 255, 255, 0.5);
  border: 10px solid rgba(173, 169, 169, 0.5);
  border-radius: 20px;
  padding: 40px;
  width: 50%;
  max-width: 500px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: $breakpoint-tablet) and (orientation: landscape) {
    flex-direction: row;
  }
`;

const ContentContainer = styled.div``;

const BackButtonContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
`;

export default function BoxContainer({
  showBackButton,
  children,
}: React.PropsWithChildren<Props>) {
  const handleBackButton = () => {
    history.back();
  };

  return (
    <Container>
      {showBackButton ? (
        <BackButtonContainer>
          <IconButton icon={BackIcon} onClick={handleBackButton} />
        </BackButtonContainer>
      ) : null}

      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}
