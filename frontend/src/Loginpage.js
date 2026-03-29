import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Loginpage.css';

const Loginpage = () => {
const [loginData,setloginData]=useState({
    username:'',
    password:''
})

//Submit Fun
const handleonsubmit=async(e)=>{
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:8000/login',loginData);
        const {success,message}=response.data;
        if(success){
            alert('Login Successfully');
        }
        else{
            alert(message || 'Login failed');
        }
    }
    catch(error){
        console.error('Login error',error)}
        setloginData({
            username:'',
            password:'',
        })
}
  
  const handleonchange=(e)=>{
    const {name,value}=e.target;
    setloginData((prevData)=>({
        ...prevData,
        [name]:value
    }))
}
    return (
    <div className="auth-page">
        <div className="auth-card">
            <p className="auth-kicker">Mern </p>
            <h1 className="auth-title">Login</h1>
            <p className="auth-subtitle">
                Login Registration Using MERN
            </p>
            <form className="auth-form" onSubmit={handleonsubmit}>
                <div className="auth-field">
                    <label className="auth-label" htmlFor="login-username">Username</label>
                    <input 
                    id="login-username"
                    className="auth-input"
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value= {loginData.username}
                    onChange={handleonchange}
                    required
                    />
                </div>
                <div className="auth-field">
                    <label className="auth-label" htmlFor="login-password">Password</label>
                    <input 
                    id="login-password"
                    className="auth-input"
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value= {loginData.password}
                    onChange={handleonchange}
                    required
                    />
                </div>
                <div className="auth-actions">
                    <button className="auth-button" type='submit'>Login</button>
                    <p className="auth-helper">
                        Not Register yet?
                        <Link className="auth-link" to='/registration'>Register Here</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Loginpage
