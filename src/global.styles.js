import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
        color: black
    }
    *{
        box-sizing:border-box;
    }
`