import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -300px;
  left: 19vw;
  width: 250px;
  height: 300px;
  padding: 15px !important;
  background-color: ${(props) => props.theme.hover1};
  cursor: default !important;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin-top: 10px;
  }
  button:hover {
    background-color: ${(props) => props.theme.hover1};
  }
`;
export const ListStyled = styled.ul`
  width: 100%;
  height: 100%;
  z-index: 1;
  list-style-type: none;
  overflow: auto;
  li {
    padding: 7px;
  }
  label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  span {
    height: 20px;
    width: 20px;
    min-width: 20px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;

export const ColorFrame = styled.span`
  background: ${(props) => props.colors};
`;
