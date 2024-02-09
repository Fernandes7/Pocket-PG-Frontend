"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import "./style.css"
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
const Register = () => {
  interface Userdata{
    username:string,
    useremail:string,
    userpassword:string,
    userconformpassword:string
  }
  const router=useRouter()
  const[loginorsignup,setloginorsignup]=useState("signup")
  const [userdata,setuserdata]=useState<Userdata>({username:"",useremail:"",userpassword:"",userconformpassword:""})

  const loginselect=()=>{
    setloginorsignup("login")
    setuserdata({username:"",useremail:"",userpassword:"",userconformpassword:""})
  }

  const signupselect=()=>{
    setloginorsignup("signup")
    setuserdata({username:"",useremail:"",userpassword:"",userconformpassword:""})
  }

  const userSignup=(e:FormEvent)=>{
  e.preventDefault()
  axios.post("http://localhost:8000/signup",{data:userdata}).then((responce:AxiosResponse)=>{
    if(responce.data.status===true)
    loginselect()
    alert(responce.data.data)
  })
  }

  const userLogin=(e:FormEvent)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/login",{data:userdata}).then((responce:AxiosResponse)=>{
    if(responce.data.success===true)
    {
    router.push("/home")
    localStorage.setItem("userid",responce.data.data)
    }
    else
    alert(responce.data.data)
  })
  }

  const handleinputdata=(e:ChangeEvent<HTMLInputElement>)=>{
    setuserdata({...userdata,[e.target.name]:e.target.value})
  }

  return (
    <div className='body'>
    <div className={loginorsignup==="signup"? "container active":"container"}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
          <a href="#" className="icon" style={{width:150}}><p style={{color:"Blue"}}>Google+</p></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" name="username" value={userdata.username} onChange={handleinputdata}/>
          <input type="email" placeholder="Email" name="useremail" value={userdata.useremail} onChange={handleinputdata} />
          <input type="password" placeholder="Password" name="userpassword"value={userdata.userpassword} onChange={handleinputdata}/>
          <input type="text" placeholder="Conform password" name="conformuserpassword" value={userdata.userconformpassword} onChange={handleinputdata} />
          <button onClick={userSignup}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Login</h1>
          <div className="social-icons">
            <a href="#" className="icon" style={{width:150}}><p style={{color:"Blue"}}>Google+</p></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" name='useremail' value={userdata.useremail} onChange={handleinputdata} />
          <input type="password" placeholder="Password" name='userpassword' value={userdata.userpassword} onChange={handleinputdata} />
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
            <h1>Hello Friend!</h1>
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
