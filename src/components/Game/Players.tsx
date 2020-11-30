import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../Buttons/IconButton";
import Button from "../Buttons/Button";
import DeleteIcon from "../../assets/svg/delete.svg";
import EditIcon from "../../assets/svg/edit.svg";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerContainer = styled.div``;

export default function Players() {
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    const newPlayer = `Player ${players.length}`;
    setPlayers([...players, newPlayer]);
  };

  const editPlayer = (player) => {
    console.log(`Edit player: ${player}`);
  };

  const deletePlayer = (player) => {
    console.log(`Remove player: ${player}`);
  };

  return (
    <StyledContainer>
      {players.map((player) => {
        return (
          <PlayerContainer>
            <h2>{player}</h2>
            <IconButton
              onClick={() => editPlayer(player)}
              icon={EditIcon}
            />
            <IconButton
              onClick={() => deletePlayer(player)}
              icon={DeleteIcon}
            />
          </PlayerContainer>
        );
      })}
      <Button onClick={addPlayer}>Add player</Button>
    </StyledContainer>
  );
}
