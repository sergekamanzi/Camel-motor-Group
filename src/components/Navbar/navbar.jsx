import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './navbar.css';
import logo from '/logo.png';

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/mission">Our Mission</Link></li>  {/* Updated with Link to /about */}
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
