import React from 'react';
import './Registerform.css'; // Add CSS styling for the form
import logo from '../Assets/imgs/back.png'; // Replace with the path to your logo image

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <img src={logo} alt="Logo" className="register-logo" />
        <h2 className="register-title">REGISTER</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Firstname" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Surname" />
            </div>
          </div>
          <div className="form-group full-width">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select>
                <option value="" disabled selected>
                  Department
                </option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
          </div>
          <div className="form-group full-width">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group full-width">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="form-group full-width">
            <a href="/login" className="link">Already have an account</a>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
