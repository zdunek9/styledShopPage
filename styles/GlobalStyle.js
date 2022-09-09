import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    max-width: 100%;
}
body{
    background-color: #fcf5e8;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
}
a,a:link,a:visited,button{
        text-decoration: none;
        background-color: unset;
        font-family: 'Montserrat', sans-serif;
    }

    .swiper-button-next, .swiper-button-prev{
        color:#ce7162;
    }
`;
