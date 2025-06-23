import React, { useState } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="Spida Logo" />
      </div>

      <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>

        <div className="nav-products">
          <a href="#">Our Products</a>
          <div className="dropdown">
            <div className="dropdown-item">
              <img src={logo1} alt="SpiTractor" />
              <h4>SpiTractor</h4>
              <p>Boosting Productivity with SpiTractor</p>
              <a href="https://spitractors.spida.africa">Visit Product website →</a>
            </div>
            <div className="dropdown-item">
              <img src={logo3} alt="SpiOptima" />
              <h4>SpiOptima</h4>
              <p>Agri-Intelligence & Smart Financing with SpiOptima</p>
              <a href="https://spioptima.spida.africa">Visit Product website →</a>
            </div>
            <div className="dropdown-item">
              <img src={logo2} alt="Spida" />
              <h4>Spida</h4>
              <p>Integrated Logistics & e-Marketplace: Moving and Selling Smarter</p>
              <a href="https://spi-ecommerce.spida.africa">Visit Product website →</a>
            </div>
          </div>
        </div>

        <a href="/About">About Us</a>
        <a href="/Strategy">Our Strategy</a>
      </div>
      <a href='/Contact'>
        <button className="contact-button">Contact Us</button>
      </a>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
