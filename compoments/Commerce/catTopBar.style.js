import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  height: 5vh;
  display: flex;
  padding-bottom: 110px;
  justify-content: space-around;
  list-style-type: none;
  position: relative;
`;
export const Lens = styled.li`
  margin: 20px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    padding-bottom: 90px;
    color: #ce7162;
  }
`;

export const UnderListLenses = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  display: none;
  cursor: default;

  ${Lens}:hover & {
    display: flex;
  }
  li {
    text-align: center;
    cursor: pointer;
    padding: 15px 0;
    width: 100%;
  }
  li:hover {
    background-color: ${(props) => props.theme.hover1};
  }
`;
