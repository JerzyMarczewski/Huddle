import React from 'react';
import logoImage from '../../images/logo.svg';
import {NavbarContainer, Button, Logo} from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src={logoImage} alt="logo" />
            <Button>Try It Free</Button>
        </NavbarContainer>
    )
}

export default Navbar;
