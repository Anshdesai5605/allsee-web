import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/Logo_white.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        
      </div>

      <div className="navbar-options">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact" className="enquiry-btn">Enquire Now</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
