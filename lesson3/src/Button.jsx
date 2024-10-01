// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addCar } from './reducers/car';
// const Button = () => {
//    const dispatch = useDispatch() 
//     return (
//         <div>
//             <button onClick={() => {
//                 dispatch(addCar({
//                     model:'Nissan',
//                     year: 2016
//                 }))
//             }}>Add car</button>
//         </div>
//     );
// }

// export default Button;
// import { useDispatch } from "react-redux";
// import { incrementNum } from "./redux/reducers/car";

// const Button = () => {
//     const dispatch = useDispatch();
//     return (
//         <div>
//            <button onClick={()=>{
//             dispatch(incrementNum())
//            }}>+</button>
//         </div>
//     );
// }

// export default Button;
import { useDispatch } from "react-redux";
import { incrementNum } from "./redux/reducers/car";
import { decrementNum } from "./redux/reducers/car";
import { resetNum } from "./redux/reducers/car";

const Button = () => {
    const dispatch = useDispatch();
    return (
        <div>
           <button onClick={()=>{
            dispatch(incrementNum())
           }}>+</button>

           <button onClick={()=>{
            dispatch(decrementNum())
           }}>-</button>
           <button onClick={()=>{
            dispatch(resetNum())
           }}>reset</button>
        </div>
    );
}

export default Button;
