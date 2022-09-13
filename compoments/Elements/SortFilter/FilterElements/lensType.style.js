import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -290px;
  left: 52vw;
  width: 250px;
  height: 290px;
  background-color: ${(props) => props.theme.hover1};
  cursor: default !important;
  display: flex;
  flex-direction: column;
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
  height: 90%;
  z-index: 1;
  list-style-type: none;
  padding: 5px;
  overflow: auto;
  li {
    margin: 20px;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;