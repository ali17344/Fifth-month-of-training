// import React from 'react';
import "./style.css"
// import { useSelector } from 'react-redux';
// const Num = () => {
//     const cars = useSelector((store) => {
//         return store.car.cars
//     })
//     const num = useSelector(s => s.car)
//     return (
//         <div>
//             {
//                 cars.map(item => (
//                 <div className='div'>
//                      <h1>{item.model}</h1>
//                      <h1>{item.year}</h1>
//                 </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default Num;
import { useSelector } from "react-redux";

const Num = () => {
  
    const num = useSelector(s => s.car.num);
    return (
        <div>
            <h1>{num}</h1>
        </div>
    );
}

export default Num;

