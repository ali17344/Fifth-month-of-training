import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios('https://fakestoreapi.com/products/')
        .then(({data}) => setData(data))
    }, [])
    return (
        <div>
            {
                data.map((element, index) => {
                    return <h2 key={index}>{element.title}</h2>
                })
            }
        </div>
    );
}

export default Home;
