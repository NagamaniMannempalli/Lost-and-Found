import React, { useState, useEffect} from "react";
import "./Auth.css";
import { validateRegisterForm } from "../utils/validate"; // make sure the path is correct
import { useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthContext'

function Register() {
  const navigate = useNavigate();
  const {setLoggedIn}=useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(()=>{
    const validationErrors = validateRegisterForm(name, email, password);
    setErrors(validationErrors||{});

    
  },[email,password,name]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setLoggedIn(true);
      navigate("/"); // Redirect to Home or Login page
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {name.length>0 && errors.name && <p className="error-msg">{errors.name}</p>}
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {email.length>0 && errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password.length>0 && errors.password && <p className="error-msg">{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
      <p>
        Already registered? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
