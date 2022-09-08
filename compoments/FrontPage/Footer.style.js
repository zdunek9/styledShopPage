import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  padding: 10px 50px;
  overflow: hidden;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
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
`;
export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
