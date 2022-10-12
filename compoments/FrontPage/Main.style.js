import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 12vh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 1100px) {
    margin: 6vh 0;
  }
  @media (max-width: 1000px) {
    margin: 4vh;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 4vh 0;
  }
  @media (max-height: 800px) {
    margin: 3vh;
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
  @media (max-height: 800px) {
    h1 {
      font-size: 5rem;
    }
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
    svg {
      font-size: 1.8rem;
      transform: translate(90deg);
    }
  }
`;
export const StyledImage = styled.div`

  object-fit: cover;
  width: 50%;
  img {
    border-radius: 25px;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-height: 800px) {
    /* width: 40%; */
  }
`;
