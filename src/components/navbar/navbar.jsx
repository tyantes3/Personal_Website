import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/uofm.jpg" alt="Univerity of Minnesota" className="logo" />
        <p>Tyler Yantes - Bachelor of Science in Computer Engineering</p>
      </div>
      <div className='linksContainer'>
        <p><a href="/#aboutme" className='navLinks'>About Me</a></p>
        <p><a href="/#skills" className='navLinks'>Skills</a></p>
        <p><a href="/#projects" className='navLinks'>Projects</a></p>
        <p><a href="/#connect" className='navLinks'>Connect</a></p>
      </div>
    </nav>
  );
}

export default Navbar;