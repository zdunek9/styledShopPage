import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 6vh;
  padding: 10px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.hover1};
  div {
    border: 1px solid gray;
    background-color: ${(props) => props.theme.background};
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 10px;
    div{
      font-size: 0.7rem;
      padding: 5px;
    }
  }
  @media (max-height: 500px) {
    height: 8vh;
    padding: 10px;
    div{
      font-size: 0.7rem;
      padding: 5px;
    }
  }

`;
export const UnactiveBtn = styled.div`
  background-color: #ded1ba !important;
  cursor: default !important;
  opacity:0.8;
`;
