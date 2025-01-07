import React from "react";
import log from '../Assets/imgs/back.png'
import "./Loginform.css";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-form">
        {/* Logo Section */}
        <div className="login-logo">
          <img src={log} alt="Logo" className="logo-image" />
        </div>

        {/* Login Form */}
        <h2>LOGIN</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your password" required />
          </div>
          <a href="https://example.com" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
