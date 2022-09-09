import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 1.2rem;
`;

export const Category = styled.ul`
  list-style-type: none;
  display: flex;
  flex-basis: 33%;
  font-weight: 500;
  li {
    padding: 25px;
    cursor: pointer;
  }
  li:hover {
    background-color: ${(props) => props.theme.hover1};
  }
  @media (max-width: 1000px) {
    font-size: 1.1rem;
    li {
      padding: 15px;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Logo = styled.div`
  flex-basis: 33%;
  text-align: center;
`;

export const Menu = styled.div`
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  p {
    font-size: 1.1rem;
    padding: 25px;
    cursor: pointer;
    
  }
  p:hover {
    background-color: ${(props) => props.theme.hover1};
  }
  div {
    margin: 0 20px;
    font-size: 2rem;
    display: flex;
    cursor: pointer;
    min-width: 40px;

  }
  @media (max-width: 1000px) {
    p {
      padding: 15px;
    }
    div {
      margin: 0 10px;
      font-size: 1.5rem;
    }
  }
`;
export const IconShop = styled.div`
  border-radius: 50%;
  padding: 10px;
  min-width: 40px;
  color: white;
  background: rgb(232, 201, 129);
  background: linear-gradient(
    180deg,
    rgba(232, 201, 129, 1) 0%,
    rgba(133, 51, 19, 1) 87%
  );
`;
