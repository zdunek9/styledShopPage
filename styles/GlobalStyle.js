import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    max-width: 100%;
    &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
}
body{
    background-color: #fcf5e8;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    user-select: none;
    
}
a,a:link,a:visited,button{
        text-decoration: none;
        color:inherit;
        background-color: unset;
        font-family: 'Montserrat', sans-serif;
    }

    .swiper-button-next, .swiper-button-prev{
        color:#ce7162;
    }
`;
