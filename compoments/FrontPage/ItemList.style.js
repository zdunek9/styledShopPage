import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 20px;
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
`;
export const SingleItem = styled.div`
  width: calc(25% - 40px);
  min-width: 200px;
  height: 28vh;
  min-height: 200px;
  margin: 30px 20px;
  cursor: pointer;
  border:1px solid gray;
  border-radius:10px;
  overflow:hidden;
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
`;
