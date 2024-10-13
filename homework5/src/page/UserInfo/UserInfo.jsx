import "./userInfo.css"
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const { id } = useParams();
    const users = useSelector(s => s.reducer.user); 

    const user = users.find(user => user.id === parseInt(id)); 
    console.log(user);
    
    return (
        <div className='userInfo'>
            <h1>{user.name}</h1>  
            <p><b>Username:</b> {user.username}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>City: </b>{user.address.city}</p>
            <p><b>Company name:</b> {user.company.name}</p>
            <Link to={'/'} className="link">Go to home?</Link>
        </div>
    );
}

export default UserInfo;

