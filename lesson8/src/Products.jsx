import React, {useEffect} from 'react';
 import { useParams, useSearchParams } from "react-router-dom";
const Products = () => {
    const  params = useParams([]);
    useEffect(() => {
        console.log(params);
           
    },[params])
    return (
        <div>
            
        </div>
    );
}

export default Products;
