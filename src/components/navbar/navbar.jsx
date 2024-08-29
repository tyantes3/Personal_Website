import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/uofm.jpg" alt="Univerity of Minnesota" className="logo" />
      </div>
      <div className='linksContainer'>
        <p><Link to="/" className='navLinks'>About Me</Link></p>
        <p><Link to="/about" className='navLinks'>Skills</Link></p>
        <p><Link to="/services" className='navLinks'>Projects</Link></p>
        <p><Link to="/contact" className='navLinks'>Connect</Link></p>
      </div>
    </nav>
  );
}

export default Navbar;