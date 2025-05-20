
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import icon from"../../Pictures/icon.png"
import bg from "../../Pictures/bg.jpg"

import './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateName = () => /^\w{3,20}$/.test(username);
  const validateEmail = () => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = () => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(password);

  const handleRegister = async () => {
    if (!validateName()) return setError("Name Invalid (3-20 characters)");
    if (!validateEmail()) return setError("Email Invalid");
    if (!validatePassword()) return setError("Password must include uppercase, lowercase, number, and 6+ characters");

    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem("username", username);
        alert("register successful!");
        window.location.href = "/login";
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

            <label htmlFor="name">Enter Your Name :</label>
            <input type="text" id="name" className="form-control my-4" placeholder="Example" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="email">Enter Your Email :</label>
            <input type="email" id="email" className="form-control my-4" placeholder="example@test.com" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Enter Your Password :</label>
            <input type="password" id="password" className="form-control my-4" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="confirm d-flex justify-content-between align-items-center">
              <button className="btn btn-danger" onClick={handleRegister}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;