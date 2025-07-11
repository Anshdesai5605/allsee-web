import React from "react";
import './navbar.css';


const Navbar = () => {
  // Task alloted to Tisha and Ansh
  return (
    < nav className="navbar">
      <div className="logo>">
        <img src="" alt="Logo"/>
      </div>

      <ul className="navbar-options">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Contact</a></li>
        <li><button className="enquiry-btn">Enquire</button></li>
      </ul>
    </nav>
  )
};

export default Navbar;
