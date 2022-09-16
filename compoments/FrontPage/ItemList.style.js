import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  margin: 5px;
  flex-wrap: wrap;
  display: flex;
`;
export const SingleItem = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: ${(props) => props.theme.darkerHover};
`;
