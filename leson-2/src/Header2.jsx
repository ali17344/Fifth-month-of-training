import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header2 = () => {
    return (
        <div>
            <Link to={'/'}> Home</Link>
            <br />
            <Link to={'/page4'}>Page 4</Link>
            <Outlet />
        </div>
    );
}

export default Header2;

