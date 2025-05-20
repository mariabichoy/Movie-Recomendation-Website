import React, { useState } from "react";
import Swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import icon from "../../Pictures/icon.png";
import bg from "../../Pictures/bg.jpg";
import { Link } from "react-router-dom";

import './Login.module.css';

const Login = ({ setIsLoggedIn, setUserName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = () => password.length >= 6;

  const handleLogin = async () => {
    if (!validateEmail()) return setError("Email is invalid");
    if (!validatePassword()) return setError("Password must be at least 6 characters");

    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem("token", data.token); 
        localStorage.setItem("data", JSON.stringify([data])); 
        setIsLoggedIn(true);  
        setUserName(data.userName);  
        alert("Login successful!");
        window.location.href = "/";  
      }
    } catch (err) {
      setError("Server error. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="overlay" style={{ background: `url(${bg}) center / cover no-repeat` }}>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="form w-50 m-auto p-2 rounded shadow" style={{ backgroundColor: "#0A2647", backdropFilter: "blur(10px)" }}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-caption text-center py-2">
              <img style={{ width: "3rem" }} src={icon} alt="icon" />
            </div>

            <label htmlFor="email">Enter Your Email :</label>
            <input
              type="email"
              id="email"
              className="form-control my-4"
              placeholder="example@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Enter Your Password :</label>
            <input
              type="password"
              id="password"
              className="form-control my-4"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="confirm d-flex justify-content-between align-items-center">
              <button className="btn btn-danger" onClick={handleLogin}>Login</button>
              <a href="#" onClick={() => Swal({ title: "مــــعــــلــــــش هه", timer: 4000 })}>عارف انك اكيد نسيت كلمه السر ؟</a>
            </div>
            <div className="text-center mt-3">
              <p style={{ color: "#fff" }}>You Don't have Account ?<Link to="/register" style={{ color: "#E94560" }}>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
