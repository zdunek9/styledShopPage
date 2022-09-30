import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  max-width: 270px;
  max-height: 140px;
  padding: 15px 30px;
  margin: 0 45px;
  border-radius: 20px;
  margin: auto;
  transition: 0.3s;
  background-color: ${(props) => props.theme.itemsBackground};

  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 1200px) {
    padding: 10px;
    min-width: unset;
  }
  @media (max-width: 800px) {
    &:hover {
      transform: unset;
    }
  }
  @media (max-width: 700px) {
    min-width: unset;
    max-width: unset;
    width: 250px;
  }
`;
export const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
  width: 100%;
  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const NameWrapper = styled.div`
  margin-right: 60px;
  p {
    margin-top: -5px;
    color: grey;
    font-size: 0.7rem;
  }
  @media (max-width: 800px) {
    margin-right: 20px;
  }
`;
export const AddButton = styled.div`
  border-radius: 10px;
  min-width: 30px;
  font-size: 1.5rem;
  padding: 3px;
  color: white;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  background: rgb(232, 201, 129);
  background: linear-gradient(
    180deg,
    rgba(232, 201, 129, 1) 0%,
    rgba(133, 51, 19, 1) 87%
  );
  cursor: pointer;
  @media (max-width: 800px) {
    margin-left: 5px;
  }
`;
