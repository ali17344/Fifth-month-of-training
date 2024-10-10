import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement_num, increment_num } from './redux/reducer';
const Btn = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(increment_num())
            }}>+5</button>
            <button onClick={() => {
                dispatch(decrement_num())
            }}>-5</button>
        </div>
    );
}

export default Btn;
