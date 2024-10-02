import React from 'react';
import { useDispatch } from 'react-redux';
import { increment_num, set_text } from './redux/reducer';
import { decrement_num } from './redux/reducer';


const Btn = () => {
    const dispatch = useDispatch()
    return (
        <div>
           <button className='btn' onClick={() => {
            dispatch(increment_num())
           }}>+</button> 
           <button className='btn' onClick={() => {
            dispatch(decrement_num())
           }}>-</button> 
          <button className='btn' onClick={() =>{
                dispatch(set_text('Hello Geeks!'))
            }}>change</button>

        </div>
    );
}

export default Btn;
