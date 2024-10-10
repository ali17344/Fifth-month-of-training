import React from 'react';
import { useSelector } from 'react-redux';
const Num = () => {
    const num = useSelector(s => s.reducer.num)
    return (
        <div>
            <h1>{num}</h1>
        </div>
    );
}

export default Num;
