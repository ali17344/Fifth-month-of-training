import React from 'react';
import "./style.css"
import { useDispatch } from "react-redux";
import { incrementNum } from "./redux/reducers/clicker";
import { decrementNum } from "./redux/reducers/clicker";
import { useSelector } from "react-redux";
// import store from './redux';
const Clicker = () => {
    const dispatch = useDispatch();
    const click = useSelector(state => state.clicker.num);
    return (
        <div>
            <div className="box">
            <h1>{click}</h1>
            <button onClick={() =>{
                dispatch(incrementNum())
            }}>+5</button> <button onClick={() =>{
                dispatch(decrementNum())
            }}>-5</button>
            </div>
        </div>
    );
}

export default Clicker;
