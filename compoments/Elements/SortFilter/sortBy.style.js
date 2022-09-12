import styled from "styled-components";

export const SortByStyle = styled.div`
  position: absolute;
  bottom: -220px;
  left: -100px;
  width: 200px;
  height: 200px;
  border: 1px solid rgb(102, 102, 102);
  background-color: ${props =>props.theme.hover1};

  form {
    margin: 18px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    input {
      width: 17px;
      height: 17px;
      margin-right: 10px;
    }

    label {
      margin: 13px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
`;
