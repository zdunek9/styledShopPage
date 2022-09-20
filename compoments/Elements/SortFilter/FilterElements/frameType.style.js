import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -290px;
  right: 17vw;
  width: 250px;
  height: 290px;
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
    margin: 20px 20px;
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
