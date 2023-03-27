import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../common_components/InputField'
import '../assests/styles/login.css'


const initinalState = {
    username: "",
    password: "",
}

function Login() {
    const [user, setUser] = useState(initinalState)
    const [exitEmail, setExitEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate();

    const userLoginHandleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    };

    /**
     * Handle catch cases
     * if user have valid username and password then navigate to dashboard
     * otherwise show error message
     */
    const userLoginHandleSubmit = () => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        const regexPass = /^\S{8,}$/;
        const userName = 'task@gmail.com'
        const pass = '12345678'
        const { username, password } = user;
        if (!username || !password) {
            setErrorMsg('Fill all fields')
            return
        }
        if (!regexEmail.test(username)) {
            setErrorMsg('Email is not valid')
            return
        }
        if (!regexPass.test(password)) {
            setErrorMsg('Password must be 8 char long and space not allowed')
            return
        }
        if (pass !== password || userName !== username) {
            setErrorMsg('email and password is not valid')
            return

        }
        localStorage.setItem('auth', JSON.stringify(user))
        navigate('/')
        setUser(initinalState)
    }

    /**If user already login then navigate to dashboad page */
    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (auth) {
            navigate('/')
        }
    }, [navigate]);

    return (
        <>
            <h1 className='login-heading'>Login</h1>
            <div className='login-container'>
                <InputField
                    placeholder="Please enter username :"
                    name='username'
                    value={user?.username}
                    onChange={userLoginHandleChange}
                    label="username"
                    type='username'
                />
                <InputField
                    placeholder="Please enter password :"
                    name='password'
                    value={user?.password}
                    onChange={userLoginHandleChange}
                    label="password"
                    type="password"
                />
                {errorMsg && <p className='error-msg'>{errorMsg}</p>}
                <button onClick={userLoginHandleSubmit} className='login-btn'>Login</button>
            </div>
        </>
    )
}

export default Login