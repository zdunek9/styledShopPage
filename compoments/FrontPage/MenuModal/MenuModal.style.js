import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 80px;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 2;
  background-color: ${(props) => props.theme.itemsBackground};
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    list-style-type: none;
    text-align: center;
  }
`;
export const ListItem = styled.li`
  padding: 0 10px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c1b28a;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:hover {
    background-color: #e5decd;
  }
`;
