import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    // useNavigate  da  hook e  vor@ patasxanatu e eji popoxman clicki jamanak
    const navigate = useNavigate()
    let x = useParams()

    useEffect(() => {
        console.log(x)
    }, []);
    const handleCLick = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate('/services')
        }, 3000)
    }
    return <div>
        <h1>Home</h1>
        <button onClick={handleCLick}>{isLoading ? 'loading....' : 'click'}</button>
        <div style={{backgroundColor:'blue',height:'1000px'}}></div>

    </div>
}