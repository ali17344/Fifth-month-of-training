import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

        axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => setData(response.data))

    return (
        <div>
            <h1>Home</h1>
            {
                data.length > 0 ? (
                    data.map((element) => (
                        <div key={element.id}>
                            <h1>{element.title}</h1>
                            <img src={element.url} alt="" />
                        </div>
                    ))
                ) : (
                   <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                )
            }
        </div>
    );
}

export default Home;
