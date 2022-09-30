import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -450px;
  left: 30vw;
  width: 500px;
  height: 450px;
  background-color: ${(props) => props.theme.hover1};
  place-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default !important;
  padding: 15px !important;

  button {
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin: 0 20px;
  }
  button:hover {
    background-color: ${(props) => props.theme.hover1};
  }
  @media (max-width: 700px) {
    bottom: -400px;
    left: 0px;
    height: 400px;
    padding: 0px !important
  }
`;
export const ListStyled = styled.ul`
  width: 50%;
  height: 95%;
  margin-top: 20px;
  z-index: 1;
  list-style-type: none;
  overflow: auto;
  cursor: default !important;

  li {
    padding: 7px;
  }
  label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  span {
    height: 20px;
    width: 20px;
    min-width: 20px;
    margin-right: 10px;
    border-radius: 10px;
  }
  
`;

export const ColorFrame = styled.span`
  background: ${(props) => props.colors};
`;
export const LensColorType = styled.div`
  padding: 20px !important;
  width: 50%;
  border: unset !important;
  cursor: default !important;

  h3 {
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 400;
    margin-bottom: 5px;
    cursor: pointer;
  }
  p {
    font-weight: 300;
    font-size: 0.7rem;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    h3{
      font-size: 0.8rem;
    }
    h4{
      font-size: 0.6rem;
    }
    p{
      font-size: 0.6rem;
      margin-bottom: 15px;
    }
  }
`;

export const WrapperParting = styled.div`
  width: 100%;
  height: 100%;
  border: unset !important;
  display: flex;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  border: unset !important;
`;
