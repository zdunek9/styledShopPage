import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 7vh;
  width: 100%;
  /* border: 1px solid black; */
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
export const PartingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 5px;
  p {
    font-size: 1.6rem;
  }
`;
