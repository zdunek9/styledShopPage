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
  margin: 0 15px;
  border-radius: 20px;
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
    padding: 20px 40px;
    margin: 15px;
    &:hover {
      transform: unset;
    }
  }
`;
export const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
export const Photo = styled.img`
  width: 180px;
`;
export const NameWrapper = styled.div`
  margin-right: 60px;
  p {
    margin-top: -5px;
    color: grey;
    font-size: 0.7rem;
  }
`;
export const AddButton = styled.div`
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 3px;
  color: white;
  display: flex;
  margin-left: 15px;
  background: rgb(232, 201, 129);
  background: linear-gradient(
    180deg,
    rgba(232, 201, 129, 1) 0%,
    rgba(133, 51, 19, 1) 87%
  );
  cursor: pointer;
`;
