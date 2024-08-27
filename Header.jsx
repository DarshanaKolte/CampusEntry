import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
  return (
    <header className="header">
      <div className="headsec">
        <div className="logo1">
          <i className="fas fa-building-columns"></i>
          <h1>Campus Entry System</h1>
        </div>
        <div className="nav">
          <ul type="none">
            <li><Link to="/signup" className="btn">Signup</Link></li> 
            <li><Link to="/login" className="btn">Login</Link></li>
            <li><Link to="/admin" className="btn">Admin Panel</Link></li>
            <li><Link to="/Profile" className="btn">Profile</Link></li>
            <li><Link to="/settings" className="btn">Setting</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
