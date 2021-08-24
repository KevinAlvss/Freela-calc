import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root{
        max-width: 100vw;
        height: 100vh;

        background-color: #F0F2F5;
    }

    body, button{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    h1{
        font-family: 'IBM Plex Sans', sans-serif;
        color: #5A5A66;
        font-weight: 600;
    }

    h2{
        color: #787880;
        font-weight: 600;
    }

    p{
        color: #BFBFCC;
        font-weight: 600;
    }

    button{
        border: none;
        cursor: pointer;
    }
`
