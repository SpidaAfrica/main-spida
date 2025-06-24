import React from "react";
import "./Spida.css";
import logo from '../assets/spicom.png';
import img1 from '../assets/wom.png';

const Spida = () => {
  return (
    <div className="spida-container">
      <div className="spida-content">
        <div className="spida-image-section">
            <img
              src={img1}
              alt="Market Woman"
              className="spida-image"
            />
        </div>
        <div className="spida-text-section">
          <img
            src={logo} // Placeholder logo
            alt="Spida Logo"
            className="spida-logo"
          />
          <h1 className="spida-heading">
            Integrated Logistics & e-Marketplace: Moving and Selling Smarter
          </h1>
          <p className="spida-description">
            Up to 50% of food in Africa is lost after harvest due to poor logistics.
            SPIDA solves this with integrated logistics and a smart e-Marketplace
            that connects farmers directly to consumers and businesses—eliminating
            middlemen and ensuring fair, transparent pricing. Our platform features
            verified transport partners, real-time tracking, and guaranteed safety
            and quality. This means less food waste, better earnings for farmers, and
            fresher, more affordable food for everyone. Buyers enjoy doorstep
            delivery, while big buyers like hotels, supermarkets, and food
            processors benefit from bulk supply, graded produce, and consistent
            quality. From farm to fork, SPIDA makes the journey seamless.
          </p>
          <div className="spida-buttons">
            <a href="https://spi-ecommerce.spida.africa">
            <button className="spida-primary-btn">Visit Product website</button>
            </a>
            <button className="spida-secondary-btn">Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spida;
