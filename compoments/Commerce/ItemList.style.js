import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 20px;
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
`;
export const SingleItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 270px;
  margin: 30px 20px;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  img{
    width: 100%;
    aspect-ratio:3/2;
    object-fit:fill;
  }
  @media (max-width: 1360px) {
    width: 21%;
    height: 250px;
  }
  @media (max-width: 1200px) {
    width: 29%;
  }
  @media (max-width: 1100px) {
    height: 250px;
  }
  @media (max-width: 950px) {
    width: 350px;
    height: 270px;
  }
  @media (max-width: 800px) {
    width: 40%;
    height: 250px;
  }
  @media (max-width: 700px) {
    height: 220px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
  @media (max-width: 550px) {
    height: 160px;
    margin: 10px;
  }
`;
export const ItemDetails = styled.div`
  padding: 15px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    padding: 10px;
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
