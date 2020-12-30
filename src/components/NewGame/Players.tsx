import React from "react";
import styled from "styled-components";
import IconButton from "../Buttons/IconButton";
import Button from "../Buttons/Button";
import DeleteIcon from "../../assets/svg/delete.svg";
import { useGameContext } from "../gameContext";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  margin: 20px auto;
  input {
    text-align: left;
    flex-grow: 1;
    font-size: 1.6em;
  }
`;

interface Props {
  continueHandler: () => void;
}

export default function Players({ continueHandler }: Props) {
  const { players, setPlayers } = useGameContext();

  const addPlayer = () => {
    const newPlayer = `Player ${players.length + 1}`;
    setPlayers([...players, newPlayer]);
  };

  const editPlayer = (event, idx) => {
    let newPlayers = [...players];
    newPlayers[idx] = event.target.value;
    setPlayers(newPlayers);
  };

  const deletePlayer = (idx) => {
    let newPlayers = [...players];
    newPlayers.splice(idx, 1);
    setPlayers(newPlayers);
  };

  return (
    <StyledContainer>
      {players.map((player, idx) => {
        return (
          <PlayerContainer key={idx}>
            <input
              type="text"
              name={idx}
              value={player}
              onChange={(event) => editPlayer(event, idx)}
            />
            <IconButton onClick={() => deletePlayer(idx)} icon={DeleteIcon} />
          </PlayerContainer>
        );
      })}
      <Button onClick={addPlayer}>Add player</Button>
      {players.length > 0 ? (
        <Button onClick={continueHandler}>Continue</Button>
      ) : null}
    </StyledContainer>
  );
}
