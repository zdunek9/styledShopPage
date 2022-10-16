import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -280px;
  left: 50px;
  width: 250px;
  height: 280px;
  background-color: ${(props) => props.theme.hover1};
  cursor: default !important;
  display: flex;
  flex-direction: column;
  padding:15px !important;
  z-index: 1;
  button {
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin-top: 10px;
  }
  button:hover {
    background-color: ${(props) => props.theme.hover1};
  }
  @media (max-width: 700px) {
    left: 0px;
  }
`;
export const ListStyled = styled.ul`
  width: 100%;
  height: 95%;
  list-style-type: none;
  overflow: auto;
  scrollbar-color: red;
  scrollbar-width: thin;

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
`;
