import styled from "styled-components";

export const SortByStyle = styled.div`
  position: absolute;
  bottom: -190px;
  left: -100px;
  width: 200px;
  height: 170px;
  border: 1px solid rgb(102, 102, 102);
  background-color: ${(props) => props.theme.hover1};
  @media (max-width: 700px) {
    left: 0;
  }
  form {
    margin: 18px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    input {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
      margin-right: 10px;
      width: 15px;
      min-width: 15px;
      height: 15px;
      min-height: 15px;
      border: 1px solid black;
      transform: translateY(-0.075em);
      border-radius: 3px;
      display: grid;
      place-content: center;

      &::before {
        content: "";
        width: 10px;
        height: 10px;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        background-color: ${(props) => props.theme.darkerHover};
      }

      &:checked::before {
        transform: scale(1);
      }
    }

    label {
      margin: 13px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
`;
