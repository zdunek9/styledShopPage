import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -300px;
  left: 50px;
  width: 250px;
  height: 300px;
  background-color: ${(props) => props.theme.hover1};
    cursor: default !important;
  display: grid;
  place-content: center;
  button {
    width: 100%;
    height: 30px;
    cursor: pointer;
  }
  button:hover {
    background-color: ${(props) => props.theme.hover1};
  }
`;
export const ListStyled = styled.ul`
  width: 100%;
  height: 95%;
  z-index: 1;
  list-style-type: none;
  padding: 10px;
  overflow: auto;
  li {
    margin: 10px;
  }
  label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;