import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
`;

export const Image = styled.img`
  width: 200px;
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
`;
