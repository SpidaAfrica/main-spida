import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Spida</h3>
          <p>
            Revolutionizing African agriculture with climate-smart data,
            financial inclusion, and real-time insights.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Solutions</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><span className="icon">📍</span> Lagos, Nigeria</li>
            <li><span className="icon">📞</span> +234 XXX XXX XXXX</li>
            <li><span className="icon">📧</span> hello@spida.africa</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Spida. All rights reserved.</p>
        <p>Empowering Africa’s food systems, one farm at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
