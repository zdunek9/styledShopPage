import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 7vh;
  width: 100%;
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
      font-size: 1.3rem;
      margin-left: 5px;
    }
    svg:nth-child(2) {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    div {
      margin: 0 10px;

      svg {
        font-size: 1.1rem;
      }
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
  @media (max-width: 700px) {
    padding: 0 10px;
    font-size: 0.7rem;
    p {
      font-size: 0.8rem;
    }
  }
`;
