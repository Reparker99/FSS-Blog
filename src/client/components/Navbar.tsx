import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav className="nav justify-content-center bg-white p-3 shadow mb-2">
            <NavLink className="py-2 mx-5 font-weight-light text-decoration-none" to="/">Home</NavLink>
            <NavLink className="py-2 mx-5 font-weight-light text-decoration-none" to="/compose">Compose</NavLink>
        </nav>
    );
};

interface NavbarProps {}

export default Navbar;