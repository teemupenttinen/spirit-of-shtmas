import React, { useEffect, useState } from "react";
import styled from "styled-components";
import questions from "../questions";
import BoxContainer from "./BoxContainer";
import Button from "./Buttons/Button";
import Timer from "./Timer";

enum Stage {
  RoundStart,
  Answers,
  WhoAnswers,
  SelectAnswers,
  CorrectAnswers,
  WrongAnswer,
}

export default function Game() {
  const [round, setRound] = useState(0);
  const [stage, setStage] = useState(Stage.RoundStart);
  const [selectedAnswerer, setSelectedAnswerer] = useState("");
  const questionSet = Math.floor(Math.random() * 10 + 1) - 1;
  const players = [
    {
      name: "Player 1",
      out: false,
      correctAnswers: 0,
    },
    {
      name: "Player 2",
      out: false,
      correctAnswers: 0,
    },
  ];
  useEffect(() => {
    if (stage === Stage.RoundStart) {
      setTimeout(() => {
        setStage(Stage.Answers);
      }, 2000);
    }
  }, [stage]);

  const timerElapsed = () => {
    if (stage === Stage.CorrectAnswers) {
      setStage(Stage.RoundStart);
    } else {
      setStage(stage + 1);
    }
  };

  const RoundStart = () => {
    return (
      <BoxContainer>
        <h1>{`Get ready for Question ${round + 1}!`}</h1>
      </BoxContainer>
    );
  };

  const StyledTimer = styled.div`
    font-size: 40px;
  `;

  const Answers = () => {
    return (
      <BoxContainer>
        <StyledTimer>
          <Timer time={30} timerElapsed={timerElapsed}></Timer>
        </StyledTimer>
        <h2>Answers</h2>
        <Button>{questions[questionSet].questions[round].answer[0]}</Button>
        <Button>{questions[questionSet].questions[round].answer[1]}</Button>
        <Button>{questions[questionSet].questions[round].answer[2]}</Button>
        <Button>{questions[questionSet].questions[round].answer[3]}</Button>
      </BoxContainer>
    );
  };

  const WhoAnswers = () => {
    return (
      <BoxContainer>
        <StyledTimer>
          <Timer time={30} timerElapsed={timerElapsed}></Timer>
        </StyledTimer>
        <h2>Who answers</h2>
        {players.map((player) => {
          <Button>A: {player.name}</Button>;
        })}
      </BoxContainer>
    );
  };

  const SelectAnswers = () => {
    return (
      <BoxContainer>
        <StyledTimer>
          <Timer time={30} timerElapsed={timerElapsed}></Timer>
        </StyledTimer>
        <h2>Select answers</h2>
        <Button>{questions[questionSet].questions[round].answer[0]}</Button>
        <Button>{questions[questionSet].questions[round].answer[1]}</Button>
        <Button>{questions[questionSet].questions[round].answer[2]}</Button>
        <Button>{questions[questionSet].questions[round].answer[3]}</Button>
      </BoxContainer>
    );
  };

  const RenderStage = () => {
    switch (stage) {
      case Stage.RoundStart:
        return <RoundStart />;
      case Stage.Answers:
        return <Answers />;
      case Stage.WhoAnswers:
        return <WhoAnswers />;
      case Stage.SelectAnswers:
        return <SelectAnswers />;
      case Stage.CorrectAnswers:
        return;
    }
  };

  return (
    <>
      <header className="App-header">
        <h1>{`Question ${round + 1}`}</h1>
      </header>
      <RenderStage />
    </>
  );
}
