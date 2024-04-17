// Registration.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import "./Registration.css";
import Lottie from "lottie-react";
import Ai from "../assets/Ai2.json";
import Aos from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
const Registration = () => {
  const [inpval, setInpval] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",
    password: "",
    confirm: "",
  });

  const addData = (e) => {
    e.preventDefault();
    let userData = JSON.parse(sessionStorage.getItem("userData")) || [];
    const existingUser = userData.find(
      (user) => user.email === inpval.email || user.phone === inpval.phone
    );
    if (inpval.password !== inpval.confirm) {
    alert("Passwords do not match");
    return;
  }
    if (existingUser) {
      alert("User already exists");
      return;
    }
    if (!Array.isArray(userData)) {
      userData = [];
    }
    userData.push(inpval);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    setInpval({
      name: "",
      phone: "",
      email: "",
      user: "",
      password: "",
      confirm: "",
    });
  };
  const style = {
    width: "550px",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const Changed = () => {};
  return (
    <div>
      {/* <Navbar /> */}
      <div className="hero">
        <div data-aos="zoom-out">
          <Lottie animationData={Ai} style={style} />
        </div>
        <div className="form">
          <form data-aos="zoom-in">
            <h1>Register</h1>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={inpval.name}
              placeholder="Enter Your Full Name"
              required
            />
            <input
              onChange={handleChange}
              name="phone"
              type="text"
              value={inpval.phone}
              placeholder="Phone Number"
              required
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={inpval.email}
              placeholder="Enter Your Email Id"
              required
            />
            <input
              onChange={handleChange}
              name="user"
              type="text"
              value={inpval.user}
              placeholder="Create your user_name"
              required
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              value={inpval.password}
              placeholder="Enter Your Password"
              required
            />
            <input
              onChange={handleChange}
              name="confirm"
              type="password"
              value={inpval.confirm}
              placeholder="Confirm Your Password"
              required
            />
            <ReCAPTCHA
              onChange={Changed()}
              sitekey="6Lf30bspAAAAACer-Ec8QIbZw_GGy5wSrBsPIf5g"
            />
            <button type="submit" onClick={addData}>
              Register
            </button>
            <p>
              <Link to="/signIn">Click to Sign in Page</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
