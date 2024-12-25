import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Loginpage.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Dashboard from "../Components/Dashboard";

const Login = () => {
  const [email, setEmail] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials are correct
    if (email === '1234' && password === '1234') {
      console.log("Login successful");
      navigate('/Dashboard'); // Redirect to dashboard on success
    } else {
      console.log("Invalid credentials");
      alert("Invalid login ID or password"); // Alert on failure
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>
          
          {/* Username input */}
          <div className="form-group position-relative">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control input-custom"
              id="username"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <FaUserAlt className="input-icon" />
          </div>
          
          {/* Password input */}
          <div className="form-group position-relative">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control input-custom"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <FaLock className="input-icon" />
          </div>
          <br />

          {/* Login button */}
          <button type="submit" className="btn btn-outline-success btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
