import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react"
// import Navbar from "./Navbar";
import "./Signin.css";
import Ai from "../assets/ani.json"

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const style={
    width:"600px"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    // const username = isNaN(formData.username) ? formData.username : parseInt(formData.username);
    const username=formData.username;
    const user = userData.find(
      (user) =>
        user.user === username ||
        user.phone === username ||
        user.email === username
    );
  
    if (!user) {
      alert("No such user.");
    } else {
      if (user.password === formData.password) {
        window.location.href = "/Dashboard";
      } else {
        alert("Wrong password.");
      }
    }
  };
    
  return (
    <div id="container">
      {/* <Navbar /> */}
      <div className="anime">
        <Lottie animationData={Ai} style={style}/>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} id="sign">
          <h1>Sign In</h1>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username or mail Id"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Your password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link id="sig" to="/registration">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
