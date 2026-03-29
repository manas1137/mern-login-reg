import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/Registartionpage.css';

const Registartionpage = () => {
  const [RegistartionData,setRegistartionData] = useState({
    username:'',
    password:''
  })
  const handleRegistrationChange =(e)=>{
    const {name,value} = e.target;
    setRegistartionData((prevdata)=>
    ({
      ...prevdata,
      [name]:value,
    }))
  }
  const handleRegistrationSubmit =async(e)=>{
    e.preventDefault();
    try{
    
      const response = await axios.post('http://localhost:8000/register',RegistartionData);
      const { success, message } = response.data || {};
      if (success === false) {
        alert(message || 'Registration failed');
      } else {
        alert('Registration Successfully');
      }
    }
    catch(error){
      console.log(error)
    }
  setRegistartionData({
    username:'',
    password:''
  })
}
  
  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="auth-kicker">MERN</p>
        <h1 className="auth-title">Registration</h1>
        <p className="auth-subtitle">
          Login Registration Using MERN
        </p>
        <form className="auth-form" onSubmit={handleRegistrationSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="register-username">Username</label>
            <input 
            id="register-username"
            className="auth-input"
            type='text'
            name='username'
            placeholder='Choose a username'
            value={RegistartionData.username}
            onChange={handleRegistrationChange}
            required />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="register-password">Password</label>
            <input 
            id="register-password"
            className="auth-input"
            type='password'
            name='password'
            placeholder='Create a password'
            value={RegistartionData.password}
            onChange={handleRegistrationChange}
            required />
          </div>
          <div className="auth-actions">
            <button className="auth-button" type='submit'>Register</button>
            <p className="auth-helper">Already Register? 
              <Link className="auth-link" to="/login">Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registartionpage
