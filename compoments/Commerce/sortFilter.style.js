import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  height: 5vh;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.6rem;
  }
`;

export const SideWrapper = styled.div`
  display: flex;

  position: relative;
  div {
    margin: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 1.6rem;
      margin-left: 5px;
    }
  }
`;
