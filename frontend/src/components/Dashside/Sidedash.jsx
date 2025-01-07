import React from "react";
import "./Sidedash.css";
import top from "../Assets/imgs/back.png";

const Sidedash = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={top} alt="HSCL Logo" />
        </div>
        <div className="sidebar-history">
          <h3>
            <i className="fas fa-history"></i> {/* FontAwesome History Icon */}
            History
          </h3>
          <ul>
            <li>Tell me about HSCL ...</li>
            <li>Another day to ask</li>
            <li>Another day to ask</li>
          </ul>
        </div>
        <div className="sidebar-footer">
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation Bar */}
        <header className="top-nav">
          <div className="profile-icon">
            <i className="fas fa-user-circle"></i> {/* Profile Icon */}
          </div>
        </header>

        {/* Center Content */}
        <div className="center-content">
          <h1>What can I help with?</h1>
          <div className="search-bar">
          <i className="fas fa-search" style={{marginLeft:'10px'}}></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidedash;
