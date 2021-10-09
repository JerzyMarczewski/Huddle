import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4rem 2rem;
    width: 100%;
    max-width: 1024px;

    @media only screen and (min-width: 500px) {
        padding: 4rem 3rem;
    }

    @media only screen and (min-width: 768px) {
        padding: 4rem 5rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 6rem 5rem;
    }
`;

export const Heading = styled.h1`
    font-size: 1.25rem;
    font-family: var(--headings-font-family);
    color: var(--vary-dark-cyan);

    @media only screen and (min-width: 500px) {
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
    
    @media only screen and (min-width: 1024px) {
        font-size: 1.9rem;
    }

`;

export const Paragraph = styled.p`
    font-size: .7rem;
    font-family: var(--body-font-family);
    font-weight: var(--body-bold-font-weight);
    color: var(--vary-dark-cyan);
    margin: 1.5rem 0 3rem;

    @media only screen and (min-width: 500px) {
        font-size: .85rem;
    }

    @media only screen and (min-width:768px) {
        font-size: 1.3rem;
        margin: 2rem 0 3.5rem;
    }

    @media only screen and (min-width:1024px) {
        font-size: .85rem;
        margin: 1.5rem 20% 3rem;
    }
`;

export const Button = styled.button`
    outline: none;
    border: none;
    padding: .75rem 2rem;
    background-color: var(--pink);
    font-size: .75rem;
    font-family: var(--body-font-family);
    font-weight: var(--body-bold-font-weight);
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 gray;
    transition: background-color ease-in .15s;

    &:hover {
        background-color: var(--light-pink);
        
    }

    @media only screen and (min-width:768px) {
        font-size: 1.5rem;
        padding: 1.5rem 4rem;
        border-radius: 3rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 1rem;
        padding: 1rem 2.66rem;
        border-radius: 3rem;
    }
`;

export const MockupImage = styled.img`
    width: 100%;
    padding: 6rem 0 2rem;

    @media only screen and (min-width: 768px) {
        padding: 8rem 0 4rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 5rem 0;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1024px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 0;

    @media only screen and (min-width: 768px) {
        padding: 4rem 0;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0rem ;
    }
`;

export const StatsIcon = styled.img`
    align-self: start;
    width: ${props => props.messages ? '15%' : '20%' };

    @media only screen and (min-width: 1024px) {
        width: 15%;
    }
`;

export const StatsHeading = styled.h1`
    color: var(--vary-dark-cyan);

    font-size: ${props => props.messages ? '2.75rem' : '3.25rem' };
    font-family: var(--body-font-family);
    font-weight: var(--body-bold-font-weight);

    @media only screen and (min-width: 500px) {
        font-size: ${props => props.messages ? '4.25rem' : '5rem' };
    }

    @media only screen and (min-width:768px) {
        font-size: ${props => props.messages ? '5.5rem' : '6.5rem' };
    }

    @media only screen and (min-width: 1024px) {
        font-size: 4rem;
    }
`;

export const StatsParagraph = styled.p`
    color: gray;
    font-size: .7rem;
    font-family: var(--body-font-family);
    font-weight: var(--body-light-font-weight);

    @media only screen and (min-width: 500px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`;