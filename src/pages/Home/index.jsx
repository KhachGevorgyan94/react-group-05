import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserForm} from "../../components/UserForm";
import axios from "axios";
import {BaseURL} from "../../routers/routers";

export const Home = () => {
    const [usersList, setUsersList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null)

    const getUsersList = async () => {
        const response = await axios.get(`${BaseURL}/usersKhach`);
        if (response.data) {
            setUsersList(response.data);
        }
    };

    useEffect(() => {
        getUsersList();
    }, []);


    const handleDeleteUser = async (id) => {
        const result = await axios.delete(`${BaseURL}/usersKhach/${id}`)
        getUsersList()
    }


    return <div>
        <h1>Users Page</h1>
        <UserForm userData={selectedUser} updateList={getUsersList}/>

        <div className={'users-list'}>
            {usersList.map((item, index) => {
                return <div className={'box'} key={'users' + index}>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
                    <button onClick={()=>{
                        setSelectedUser(item)
                    }}>Edit</button>
                    <br/>
                    <button onClick={() => {
                        handleDeleteUser(item._id)
                    }}>Delete
                    </button>
                </div>
            })}
        </div>


    </div>
}