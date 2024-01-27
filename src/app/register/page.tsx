"use client"
import React, { FormEvent, useState } from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Register = () => {
  const[loginorsignup,setloginorsignup]=useState("signup")
  const loginselect=()=>{
    setloginorsignup("login")
  }
  const signupselect=()=>{
    setloginorsignup("signup")
  }
  const userSignup=(e:FormEvent)=>{
  e.preventDefault()
  }
  const userLogin=(e:FormEvent)=>{
    e.preventDefault()
  }
  return (
    <div className='.body'>
    <div className={loginorsignup==="signup"? "container active":"container"}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
          <a href="#" className="icon" style={{width:150}}><FontAwesomeIcon icon={faGooglePlusG} style={{color: "#00008B",}} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Conform password" />
          <button onClick={userSignup}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Login</h1>
          <div className="social-icons">
            <a href="#" className="icon" style={{width:150}}><FontAwesomeIcon icon={faGooglePlusG} style={{color: "#00008B",}} /></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className='rememberdiv'>
            <p>Remember me</p>
            <input type="checkbox" />
          </div>
          <a href="#">Forget Your Password?</a>
          <button onClick={userLogin}>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Hello Freind!</h1>
            <p>If you have already account please click the login button below</p>
            <button className="hidden" onClick={loginselect}>Login In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p><b>Welcome to Pocket PG</b><br></br>To create new account click the signup button below</p>
            <button className="hidden" onClick={signupselect}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
