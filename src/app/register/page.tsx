"use client";
import React, { ChangeEvent, FormEvent, use, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
const Register = () => {
  interface Userdata {
    username: string;
    useremail: string;
    userpassword: string;
    userconformpassword: string;
  }
  const router = useRouter();
  const [loginorsignup, setloginorsignup] = useState("signup");
  const [userdata, setuserdata] = useState<Userdata>({
    username: "",
    useremail: "",
    userpassword: "",
    userconformpassword: "",
  });

  const loginselect = () => {
    setloginorsignup("login");
    setuserdata({
      username: "",
      useremail: "",
      userpassword: "",
      userconformpassword: "",
    });
  };

  const signupselect = () => {
    setloginorsignup("signup");
    setuserdata({
      username: "",
      useremail: "",
      userpassword: "",
      userconformpassword: "",
    });
  };

  const validateallinputfields = () => {
    for (const keys in userdata) {
      if (userdata[keys as keyof Userdata] === "") return false;
    }
    return true;
  };

  const userSignup = (e: FormEvent) => {
    e.preventDefault();
    const validate = validateallinputfields();
    if (validate) {
      if (userdata.userpassword === userdata.userconformpassword) {
        axios
          .post("http://localhost:8000/signup", { data: userdata })
          .then((responce: AxiosResponse) => {
            console.log(responce);
            if (responce.data.success === true) loginselect();
            toast(responce.data.data);
          });
      } else toast("Passwords are doesnot Matching");
    } else toast("All Fields must be filled");
  };

  const userLogin = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/login",
        { data: userdata },
        { withCredentials: true }
      )
      .then((responce: AxiosResponse) => {
        if (responce.data.success === true) {
          router.back()
          localStorage.setItem("userid", responce.data.data);
        } else toast(responce.data.data);
      });
  };

  const handleinputdata = (e: ChangeEvent<HTMLInputElement>) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="body">
      <div
        className={
          loginorsignup === "signup" ? "container active" : "container"
        }
      >
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon" style={{ width: 150 }}>
                <p style={{ color: "darkblue" }}>Google+</p>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={userdata.username}
              onChange={handleinputdata}
            />
            <input
              type="email"
              placeholder="Email"
              name="useremail"
              value={userdata.useremail}
              onChange={handleinputdata}
            />
            <input
              type="password"
              placeholder="Password"
              name="userpassword"
              value={userdata.userpassword}
              onChange={handleinputdata}
            />
            <input
              type="text"
              placeholder="Conform password"
              name="userconformpassword"
              value={userdata.userconformpassword}
              onChange={handleinputdata}
            />
            <button onClick={userSignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Login</h1>
            <div className="social-icons">
              <a href="#" className="icon" style={{ width: 150 }}>
                <p style={{ color: "darkblue" }}>Google+</p>
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              name="useremail"
              value={userdata.useremail}
              onChange={handleinputdata}
            />
            <input
              type="password"
              placeholder="Password"
              name="userpassword"
              value={userdata.userpassword}
              onChange={handleinputdata}
            />
            <div className="rememberdiv">
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
              <p>
                If you have already account please click the login button below
              </p>
              <button className="hidden" onClick={loginselect}>
                Login In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>
                <b>Welcome to Pocket PG</b>
                <br></br>To create new account click the signup button below
              </p>
              <button className="hidden" onClick={signupselect}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
