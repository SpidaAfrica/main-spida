/*import React, { useState } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/spicom.png';
import logo3 from '../assets/logo3.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="nav-logo">
       <a href="/"><img src={logo} alt="Spida Logo" /></a>   
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
              <h4>Spi-ecommerce</h4>
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

import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/spicom.png';
import logo3 from '../assets/logo3.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openDropdown = () => {
    setDropdownOpen(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 10000); // Auto-close after 10 seconds
  };

  const closeDropdown = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  const handleScroll = () => {
    closeDropdown();
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <a href="/"><img src={logo} alt="Spida Logo" /></a>
      </div>

      <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>

        <div
          className="nav-products"
          onMouseEnter={openDropdown}
          onClick={openDropdown}
          ref={dropdownRef}
        >
          <a href="#">Our Products</a>
          {dropdownOpen && (
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
                <h4>Spi-ecommerce</h4>
                <p>Integrated Logistics & e-Marketplace: Moving and Selling Smarter</p>
                <a href="https://spi-ecommerce.spida.africa">Visit Product website →</a>
              </div>
            </div>
          )}
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
*/
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/spicom.png';
import logo3 from '../assets/logo3.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openDropdown = () => {
    setDropdownOpen(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 10000); // Close after 10 seconds
  };

  const closeDropdown = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest('.nav-products')
    ) {
      closeDropdown();
    }
  };

  const handleScroll = () => {
    closeDropdown();
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <a href="/"><img src={logo} alt="Spida Logo" /></a>
      </div>

      <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>

        <div
          className="nav-products"
          onMouseEnter={openDropdown}
          onClick={openDropdown}
        >
          <a href="#">Our Products</a>
          <div
            className="dropdown"
            ref={dropdownRef}
            style={{ display: dropdownOpen ? 'flex' : 'none' }}
          >
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
              <h4>Spi-ecommerce</h4>
              <p>Integrated Logistics & e-Marketplace: Moving and Selling Smarter</p>
              <a href="https://spi-ecommerce.spida.africa">Visit Product website →</a>
            </div>
          </div>
        </div>

        <a href="/About">About Us</a>
        <a href="/Strategy">Our Strategy</a>
      </div>

      <a href="/Contact">
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

