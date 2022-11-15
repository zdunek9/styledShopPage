import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -210px;
  right: 2vw;
  width: 250px;
  height: 210px;
  padding: 15px !important;
  z-index: 1;

  background-color: ${(props) => props.theme.hover1};
  cursor: default !important;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin-top: 10px;
    border:1px solid black;

  }
  button:hover {
    background-color: ${(props) => props.theme.hover1};
  }
`;
export const ListStyled = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  overflow: auto;
  li {
    margin: 20px 20px;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
