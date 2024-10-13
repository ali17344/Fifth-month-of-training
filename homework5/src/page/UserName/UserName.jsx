import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './userName.css';
const UserName = () => {
    const userName = useSelector(s => s.reducer.user) ;

    return (
        <div className='userName'>
            <h1>User Names</h1>
            {
                userName.length > 0 ? (
                    userName.map(item => (
                        <Link className='link' key={item.id} to={`/user_info/${item.id}`}>
                            <ul>
                                <li>{item.name}</li>
                            </ul>
                        </Link>
                    ))
                ) : (
                    <p>No users available</p> 
                )
            }
        </div>
    );
}

export default UserName;

