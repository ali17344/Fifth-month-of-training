import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {incrementCount, decrementCount, resetCount} from './redux/slice'
const Page = () => {
    const count = useSelector(s => s.slice.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                dispatch(incrementCount())
            }}>+</button>            
            <button onClick={() => {
                dispatch(decrementCount())
            }}>-</button>            
            <button onClick={() => {
                dispatch(resetCount())
            }}>reset</button>
        </div>
    );
}

export default Page;
