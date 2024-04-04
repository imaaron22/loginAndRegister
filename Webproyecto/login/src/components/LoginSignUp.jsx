import React, { useState } from "react";
import "./LoginSignUp.css";
import axios from "axios";

import user_icon from "../assets/person.png";
import password_icon from "../assets/password.png";
import email_icon from "../assets/email.png";

const LoginSignUp = () => {
const[action,setAction] =useState("Sign Up");

  return (
    <div className="container">
    <div className="header">
    <div className="text">{action}</div>
    <div className="underline"></div>
    </div>
    <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
    <img src={user_icon} alt="user_icon" />
    <input type="text" placeholder="Username" />
    </div>}
   
    <div className="input">
    <img src={email_icon} alt="user_icon" />
    <input type="email" placeholder="Email" />
    </div>
    <div className="input">
    <img src={password_icon} alt="user_icon" />
    <input type="password" placeholder="Password" />
    </div>
    </div>
    <div className="submit-container">
<div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}} >Sign Up</div>

    </div>
    <div className="submit-container2">
    <div className={action==="Sign Up"?"Submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

    </div>
    </div>
  );
}

export default LoginSignUp;