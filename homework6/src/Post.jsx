import React from 'react';
import './style.css';

const Post = ({data}) => {
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((element) => (
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
                    ))
                ) : (
                    <>
                    <div className="lds-spinner">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <h1 className='loading-text'>Wait for loading</h1>
                    </>
                )
            }
        </div>
    );
}

export default Post;

