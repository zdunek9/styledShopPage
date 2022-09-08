import React from "react";
import styled from "styled-components";
const Button = styled.button`
  padding: 15px 30px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color
      ? "white"
      : "black"}; //if there is any background color go white, else black
      cursor: pointer;
`;

function Button1({ text, color }) {
  return <Button color={color}>{text}</Button>;
}

export default Button1;
