import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/card'}>Card</Link>
            <br />
            <Link to={'/page3'}>Page 2</Link>
            <Outlet />
        </div>
    );
}

export default Header;

