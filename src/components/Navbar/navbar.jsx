import  { useState } from 'react';
import './navbar.css';
import logo from '/sal.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='main-navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#technology">Equipment & Technology</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className='booking-button'>
        <button>Booking Service</button>
      </div>

      <div className='menu-icon' onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
    </div>
  );
}

export default Navbar;
