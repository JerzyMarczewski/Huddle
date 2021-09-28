import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4rem 1.5rem;
    width: 100%;
    max-width: 1024px;
`;

export const Heading = styled.h1`
    font-size: 1.25rem;
    font-family: var(--headings-font-family);
    font-weight: 700;
    color: var(--vary-dark-cyan);
`;

export const Paragraph = styled.p`
    font-size: .75rem;
    font-family: var(--body-font-family);
    font-weight: 400;
    color: var(--vary-dark-cyan);
    margin: 1.5rem 0 3rem;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    padding: .75rem 2rem;
    background-color: var(--pink);
    font-size: .75rem;
    font-family: var(--body-font-family);
    font-weight: 700;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 gray;
    transition: background-color ease-in .15s;

    &:hover {
        background-color: var(--light-pink);
        
    }
`;

export const MockupImage = styled.img`
    width: 100%;
    padding: 6rem 0;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 0;
`;

export const StatsIcon = styled.img`
    align-self: start;
    width: ${props => props.messages ? '15%' : '20%' };
`;

export const StatsHeading = styled.h1`
    color: var(--vary-dark-cyan);

    font-size: ${props => props.messages ? '2.75rem' : '3.25rem' };
    
    font-family: var(--body-font-family);
    font-weight: 700;
`;

export const StatsParagraph = styled.p`
    color: gray;
    font-size: .7rem;
    font-family: var(--body-font-family);
    font-weight: 400;
`;