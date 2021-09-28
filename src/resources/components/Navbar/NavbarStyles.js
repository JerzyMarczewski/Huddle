import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:1.25rem;

    @media only screen and (min-width: 500px) {
       padding: 1.5rem 2rem;
    }

    @media only screen and (min-width: 765px) {
        padding: 2rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 3rem 2.5rem;
    }

    @media only screen and (min-width: 1440px) {
        padding: 4rem 3.5rem;
    }
`;

export const Logo = styled.img`
    width: 4rem;

    @media only screen and (min-width: 375px) {
       width: 5rem;
    }

    @media only screen and (min-width: 500px) {
       width: 7rem;
    }

    @media only screen and (min-width: 765px) {
        width: 8rem;
    }

    @media only screen and (min-width: 1024px) {
        width: 9rem;
    }

    @media only screen and (min-width: 1440px) {
        width: 12rem;
    }
`;

export const Button = styled.button`
    outline: none;
    background-color: transparent;
    border: 1px solid var(--pink);
    border-radius: 1rem;
    color: var(--pink);
    padding: .15rem .6rem;
    font-size: .5rem;
    cursor: pointer;
    box-shadow: 0 0 2px var(--pink);
    transition: background-color ease-in .15s;

    &:hover {
        border-color: var(--light-pink);
        color: var(--light-pink);
        box-shadow: 0 0 2px var(--light-pink);
    }

    @media only screen and (min-width: 375px) {
        padding: .225rem .75rem;
        font-size: .7rem;
    }

    @media only screen and (min-width: 500px) {
        padding: .3rem 1rem;
        font-size: .7rem;
    }

    @media only screen and (min-width: 765px) {
        font-size: .6rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: .7rem;
    }

    @media only screen and (min-width: 1440px) {
        padding: .35rem 1.4rem;
        font-size: .9rem;
    }
`;