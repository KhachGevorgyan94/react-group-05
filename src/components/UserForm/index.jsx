import {useEffect, useState} from "react";
import './style.scss'
import {CustomInput} from "../CustomInput";
import axios from "axios";
import {BaseURL} from "../../routers/routers";

export const UserForm = ({updateList, userData}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errorData, setErrorData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
      if(userData){
          setFormData({
              firstName:userData.firstName ,
              lastName:userData.lastName ,
              email:userData.email ,
              password:userData.password ,
              confirmPassword:userData.confirmPassword
          })
      }
    }, [userData]);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {

        if (validation()) {
            const result =   await axios.post(`${BaseURL}/usersKhach`,formData)
            if(result.data){
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                updateList()

            }
        }
    }


    const validation = () => {
        let isValidate = true
        const errorData = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }


        if (!formData.firstName.trim().length) {
            isValidate = false
            errorData.firstName = 'FirstName field is require'
        }
        if (!formData.lastName.trim().length) {
            isValidate = false
            errorData.lastName = 'LastName field is require'
        }
        if (!formData.email.trim().length) {
            isValidate = false
            errorData.email = 'Email field is require'
        }
        if (formData.email.trim().length && !validateEmail(formData.email)) {
            isValidate = false
            errorData.email = 'Incorrect email value'
        }
        if (!formData.password.trim().length) {
            isValidate = false
            errorData.password = 'Password field is require'
        }
        if (!formData.confirmPassword.trim().length) {
            isValidate = false
            errorData.confirmPassword = 'ConfirmPassword field is require'
        }
        if (formData.password.trim().length && formData.password.length < 6) {
            isValidate = false
            errorData.password = 'Password length mast be more than 6'
        }

        if (formData.password.trim().length && formData.confirmPassword.trim().length && formData.password !== formData.confirmPassword) {
            isValidate = false
            errorData.confirmPassword = 'Password and confirm password incorrect'
        }

        setErrorData(errorData)
        return isValidate
    }


    return <div>
        <div className={'user-form-container'}>
            <CustomInput
                name={'firstName'}
                placeholder={'First name'}
                value={formData.firstName}
                onChange={handleChange}
                error={errorData.firstName}
            />
            <CustomInput name={'lastName'}
                         placeholder={'Last name'}
                         value={formData.lastName}
                         onChange={handleChange}
                         error={errorData.lastName}
            />
            <CustomInput name={'email'}
                         className={'G-w-100'}
                         placeholder={'Email'}
                         value={formData.email}
                         onChange={handleChange}
                         error={errorData.email}
            />
            <CustomInput name={'password'}
                         type={'password'}
                         placeholder={'Password'}
                         value={formData.password}
                         onChange={handleChange}
                         error={errorData.password}
            />
            <CustomInput name={'confirmPassword'}
                         type={'password'}
                         placeholder={'Confirm Password'}
                         value={formData.confirmPassword}
                         onChange={handleChange}
                         error={errorData.confirmPassword}
            />

            <div className='confirm-button'>
                <button onClick={handleSubmit}>{userData?'Edit user':'Registration'}</button>
            </div>
        </div>
    </div>
}