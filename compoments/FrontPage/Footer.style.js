import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  padding: 10px 50px;
  overflow: hidden;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SubTitle = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-right: 10vw;

  @media (max-width: 1300px) {
    margin-right: 2vw;
    font-size: 2.5rem;
  }
  @media (max-width: 1000px) {
    text-align: center;
    margin-right: unset;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const ItemsWrapper = styled.div`
  width: 50%;
  min-width: 700px;
  @media (max-width: 700px) {
    min-width: unset;
    width: 100%;
  }
`;
