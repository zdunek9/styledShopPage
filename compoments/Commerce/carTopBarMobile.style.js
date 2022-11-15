import styled from "styled-components";

export const Wrapper = styled.ul`
  display: none;
  @media (max-width: 700px) {
    width: 100%;
    height: 5vh;
    display: flex;
    padding-bottom: 80px;
    justify-content: space-around;
    list-style-type: none;
    position: relative;
  }
  @media (max-height: 500px) {
    width: 100%;
    height: 5vh;
    display: flex;
    padding-bottom: 80px;
    justify-content: space-around;
    list-style-type: none;
    position: relative;
  }
`;
export const Lens = styled.li`
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.7rem;
  margin: 30px 0px;
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const UnderListLenses = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  padding: 15px;
  z-index: 1;
  width: 100%;
  background-color: white;
  border-radius: 10px;

  li {
    font-size: 0.8rem;
    text-align: center;
    padding: 15px 0;
    width: 100%;
  }
`;
