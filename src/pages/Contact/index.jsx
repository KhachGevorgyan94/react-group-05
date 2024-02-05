import {useEffect, useState} from "react";
import './style.scss'
import axios from "axios";
import {BaseURL} from "../../routers/routers";

export const Contact = () => {

    const [toDoList, setToDoList] = useState([])
    const [loading, setLoading] = useState(false)

    const getToDoList = () => {
        setLoading(true)
        fetch(`${BaseURL}/todos`).then((data) => {
            return data.json()
        }).then((result) => {
            setToDoList(result)
            setLoading(false)
        }).catch(() => {
            alert('Worniiiiiiiiiiiiiiiiiiig')
            setLoading(false)
        })
    }

    const getToDoListNew = async () => {
        setLoading(true)
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        if (result.data) {
            setToDoList(result.data)
            setLoading(false)
        }

    }

    useEffect(() => {
        getToDoListNew()
    }, []);

    return <div>
        <h1>Contact</h1>

        {!loading ? <>
            {toDoList.length ? <div>
                {toDoList.map((item, index) => {
                    return <ToDoCard item={item}/>
                })}
            </div> : <div>
                <p> list was empty</p>
            </div>}
        </> : <div><h1>loading...</h1></div>}
    </div>
}


function ToDoCard({item}) {
    return <div className={`to-do-card ${item.completed ? 'completed' : ''}`}>
        <p>{item.title}</p>
    </div>
}