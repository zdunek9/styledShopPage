import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  width: 300px;
  height: 350px;
  z-index: 2;
  background-color: red;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    list-style-type: none;
    text-align: center;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  height: 60px;
`;
