import styled from "styled-components";

import React from "react";

const CustomCheckboxStyle = styled.input`
  cursor: pointer;

  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  margin-right: 10px;
  width: 15px;
  min-width: 15px;
  height: 15px;
  min-height: 15px;
  border: 1px solid black;
  transform: translateY(-0.075em);
  border-radius: 3px;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${(props) => props.theme.darkerHover};
  }

  &:checked::before {
    transform: scale(1);
  }
`;

function CustomCheckbox({ name, checked, handleOnChangeProp, index }) {
  const change = () => {
    handleOnChangeProp(index);
  };
  return (
    <CustomCheckboxStyle
      type="checkbox"
      name={name}
      value={name}
      checked={checked}
      onChange={change}
    />
  );
}

export default CustomCheckbox;
