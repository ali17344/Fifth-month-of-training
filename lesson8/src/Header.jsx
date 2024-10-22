import React , {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
const Header = () => {
    const setActive = ({ isActive }) =>(isActive ? " active" : "");
    const [categories , setCategories] = useState([])

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => setCategories(data))
    }, [])
    return (
        <div className='header'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/page'}>Page</NavLink>

            {
                categories.map((element) => {
                    return <NavLink key={element}  className={setActive} to={`/product/${element}?limit=5`}>{element}</NavLink>
                })
            }
        </div>
    );
}

export default Header;
