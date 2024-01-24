import {useParams} from "react-router-dom";
import {useEffect} from "react";

export const ProductDetails = ()=>{

    const {id} = useParams()



    return <div>
        <h1>ProductDetails</h1>
        <p>{id}</p>

        <div style={{backgroundColor:'red',height:'1000px'}}></div>
    </div>
}