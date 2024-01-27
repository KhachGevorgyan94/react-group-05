import './style.scss'
import {useState} from "react";
import {CustomCheckbox} from "../../components/CustomCheckbox";

export const InputForms = () => {
    const [inputValue, setInputValue] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [rangeValue, setRangeValue] = useState('')
    const [selectMerc, setSelectMerc] = useState(false)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    // console.log(userData['firstName'])
    // console.log(userData['lastName'])

    console.log(userData)

    const handleColorChange = (e) => {
        setColorValue(e.target.value)
    }

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value)

    }
    return <div>
        <div style={{margin: '0 auto'}} className={'width-400 gap-15 G-flex G-flex-column'}>
            {/*<div className='input-block'>*/}
            {/*    <label>*/}
            {/*        <input type="text"/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<div className='input-block'>*/}
            {/*    <label>*/}
            {/*        <input type="text"/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            <div className='input-block'>
                <label>
                    <input name={'firstName'} placeholder={'first name'} value={userData.firstName}
                           onChange={handleChange} type="text"/>
                </label>
                <label>
                    <input name={'lastName'} placeholder={'last name'} value={userData.lastName} onChange={handleChange}
                           type="text"/>
                </label>
                <label>
                    <input name={'age'} placeholder={'age '} value={userData.age} onChange={handleChange} type="text"/>
                </label>
                <label>
                    <input name='email' placeholder={'email'} value={userData.email} onChange={handleChange}
                           type="text"/>
                </label>
                {/*<label >*/}
                {/*    <input onChange={handleColorChange} type="color"/>*/}
                {/*</label>*/}
                {/*<label >*/}
                {/*    <input min={10} max={1000} step={5}  onChange={handleRangeChange} type="range"/>*/}
                {/*</label>*/}
                {/*<p style={{color:colorValue}}>{inputValue}</p>*/}
                {/*<p>{rangeValue}</p>*/}


                {/*<CustomCheckbox value={selectMerc}*/}
                {/*                onChange={()=>{*/}
                {/*    setSelectMerc(!selectMerc)*/}
                {/*}} label={'BMW'}/>*/}
                {/*<CustomCheckbox value={true} label={'Mercedes'}/>*/}
            </div>
        </div>


    </div>
}