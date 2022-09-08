import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 6vh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 4vw;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 4vw 0;
  }
`;
export const Parting = styled.div`
  margin-right: 5vw;
  h1 {
    font-size: 7rem;
    font-weight: 500;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 5vw 0;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    margin-right: unset;
  }
`;
export const Title = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    * {
      cursor: pointer;
    }
  }
`;
export const StyledImage = styled.div`
  border-radius: 25px;
  width: 50%;
  height: fit-content;

  @media (max-width: 800px) {
    display: none;
  }
`;
