import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* COLORS */
        
            /* Primary */
            --pink: hsl(322, 100%, 66%);
            --light-pink: hsl(321, 100%, 78%);
            --light-red: hsl(0, 100%, 63%);

            /* Secondary */
            --vary-dark-cyan: hsl(192, 100%, 9%);
            --vary-pale-blue: hsl(207, 100%, 98%);

        /* TYPOGRAPHY */

            /* Headings */
            --headings-font-family: 'Poppins', sans-serif;

            /* Body */
            --body-font-family: 'Open Sans', sans-serif;
            --body-light-font-weight: 400;
            --body-medium-font-weight: 600;
            --body-bold-font-weight: 700;
            
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        
    }

    body {
        width: 100%;
        min-height: 100vh;
        font-family: var(--body-font-family);
        font-weight: var(--body-light-font-weight);

    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default GlobalStyle;