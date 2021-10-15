import styled from "styled-components";

export const WaveTopMobile = styled.img`
    width: 100%;
`;

export const WaveTopDesktop = styled.img`
    width: 100%;
`;

export const WaveBottomMobile = styled.img`
    width: 100%;
`;

export const WaveBottomDesktop = styled.img`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--vary-pale-blue);
    padding: 4rem 0 0;
    text-align: center;

    @media only screen and (min-width: 500px) {
        padding: 5rem 0 0;
    }
`;

export const Illustration = styled.img`
    width: 80%;
`;

export const TextContainer = styled.div`
    margin: 3rem 10%;
`;

export const Heading = styled.h1`
    font-size: 1.25rem;
    font-family: var(--headings-font-family);
    color: var(--vary-dark-cyan);
    padding: .75em;

    @media only screen and (min-width: 500px) {
        font-size: 1.4rem;
    }
`;


export const Paragraph = styled.p`
    font-size: .65rem;
    color: var(--vary-dark-cyan);

    @media only screen and (min-width: 500px) {
        font-size: .85rem;
    }
`;