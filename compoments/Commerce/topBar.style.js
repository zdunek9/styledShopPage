import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  @media (max-width: 600px) {
    height: 6vh;
    min-height: 65px;
    padding: 0px;
  }
`;

export const Image = styled.img`
  width: 200px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Options = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    span {
      font-size: 30px;
      color: gray;
    }
  }
  div::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -120px;
    width: 100%;
    border-bottom: 2px solid gray;
    transition: 0.6s;
    /* display: none; */
  }
  div:hover:before {
    left: 0;
  }
  @media (max-width: 800px) {
    font-size: 0.6rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    div {
      margin: 5px;
    }
    div::before {
      display: none;
    }
  }
`;
