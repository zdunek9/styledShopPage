import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1600px;
  background-color: ${(props) => props.theme.background};
`;
