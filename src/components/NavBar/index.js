import React from 'react'
import { Nav, NavLink } from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>New York Times best-selling books</NavLink>
            </Nav>
        </>
    );
};

export default NavBar
