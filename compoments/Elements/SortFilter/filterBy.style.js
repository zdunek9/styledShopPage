import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 6vh;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.hover1};
  div {
    border: 1px solid gray;
    background-color: ${(props) => props.theme.background};
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
  }
`;
