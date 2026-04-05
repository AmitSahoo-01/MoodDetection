import React from 'react'
import "../style/login.scss";
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const {loading,loginUser} = useAuth();  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if(loading){
    return <h1>Loading...</h1>
   }

  async function handleSubmit(e){
    e.preventDefault();
    await loginUser({email,password});
    setTimeout(() => {
      navigate("/");
    }, 1000); 
    
  }

  return (
    <main>
      <div className="form-controller">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} placeholder='Enter your mail address' onChange={(e)=>{
              setEmail(e.target.value);
            }} id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password"  value={password} placeholder='Enter your password' onChange={(e)=>{
              setPassword(e.target.value);
            }} id="password" />
          </div>
          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </main>
  )
}

export default Login;