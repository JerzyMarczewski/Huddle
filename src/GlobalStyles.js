import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* COLORS */
        
            /* Primary */
            --pink: hsl(322, 100%, 66%);
            --light-pink: hsl(321, 100%, 78%);
            --light-red: hsl(0, 100%, 63%);

            /* Secondary */
            --vary-dark-cyan: hsl(192, 100%, 9%);
            --vary-pale-blue: hsl(207, 100%, 98%)
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        background-color: var(--pink);
        font-family: 'Open Sans';
        font-weight: 400;
    }
`;

export default GlobalStyle;