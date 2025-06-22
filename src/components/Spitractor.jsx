import React from "react";
import "./Spitractor.css";
import img from '../assets/tr.png';
import logo from '../assets/logo1.png';

const SpiTractor = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-section">
            <img
              src={img}
              alt="Tractor"
              className="tractor-image"
            />
        </div>
        <div className="text-section">
          <img
            src={logo}// Placeholder logo image
            alt="SpiTractor Logo"
            className="logo"
          />
          <h1 className="heading">Boosting Productivity with SpiTractor</h1>
          <p className="description">
            SpiTractor brings affordable mechanization to smallholder farmers through
            AI-driven virtual farm clusters.
          </p>
          <ul className="features">
            <li>Farmers grouped in nearby communities and matched with tractors</li>
            <li>Shared tractor services at affordable costs</li>
            <li>Replaces manual labour with horsepower to triple yields</li>
          </ul>
          <p className="subheading">AI-powered Extension Agents:</p>
          <ul className="features">
            <li>Speak the local language</li>
            <li>Offer real-time advice and diagnostics</li>
          </ul>
          <p className="benefit">More knowledge. More harvest. More profit.</p>
          <div className="buttons">
          <a href="https://spitractors.spida.africa">
            <button className="primary-btn">Visit Product website</button>
         </a>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiTractor;
