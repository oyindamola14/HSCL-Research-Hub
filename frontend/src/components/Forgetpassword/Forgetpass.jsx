import React from "react";
import "./Forgetpass.css";
import take from '../Assets/imgs/back.png'

const ForgetPass = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request submitted.");
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        {/* Logo */}
        <img
          src={take}
          alt="HSCL Logo"
          className="forgot-password-logo"
        />

        {/* Heading */}
        <h2 className="forgot-password-heading">Forgot Password</h2>

        {/* Email Input */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="forgot-password-input"
        />

        {/* Submit Button */}
        <button type="submit" className="forgot-password-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
