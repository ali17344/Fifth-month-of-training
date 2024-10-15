import React, { useState } from 'react';

const Search = ({ data }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState(''); 
    const [filteredData, setFilteredData] = useState(data); 

    const search = () => {
        const filtered = data.filter(post => {
            return ( 
                (postTitle === '' || post.title.toLowerCase().includes(postTitle.toLowerCase())) &&
                (postBody === '' || post.body.toLowerCase().includes(postBody.toLowerCase()))
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            {
                data.length > 0 ? (
                    <>
                        
                        <input
                            type="text"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                        />
                        <button onClick={search}>Search</button>
                        <div>
                            {filteredData.map((element) => (
                                <div key={element.id} className='container'>
                                <div className="post-container">
                                    <h3>Post number: {element.id}</h3>
                                    <p className='p'>Title: {
                                    element.title.length > 50
                                    ? 
                                    element.title.substr(0, 47).trim() + '...'
                                    :
                                    element.title}</p>
                                    <p className='p'>Body: {element.body}</p>
                                </div>
                                </div> 
                            ))}
                        </div>
                    </>
                ) : null
            }
        </div>
    );
};

export default Search;

