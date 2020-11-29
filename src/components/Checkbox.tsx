import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";

interface Props {
  onChange: React.ChangeEvent<HTMLInputElement>;
  label: string;
  name: string;
  isChecked: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledLabel = styled.label`
  position: relative;
  padding-left: 4.5em;
  cursor: pointer;
  line-height: 3em;
  font-size: 2em;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5em;
    height: 80%;
    border: 5px solid ${Colors.red};
    background: #fff;
    border-radius: 20px;
  }

  &:after {
    content: "✓";
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    font-size: 2.5em;
    line-height: 0.8;
    color: #09ad7e;
    transition: all 0.2s;
  }

  &:hover:before {
    border: 5px solid ${Colors.lightRed};
  }
`;

export default function Checkbox({ onChange, label, name, isChecked }: Props) {
  return (
    <StyledContainer>
      <StyledCheckbox
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </StyledContainer>
  );
}
