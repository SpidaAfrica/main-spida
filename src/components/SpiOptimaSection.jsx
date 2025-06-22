import React from "react";
import "./SpiOptimaSection.css";
import logo from '../assets/logo3.png';
import img1 from '../assets/man.png';


const SpiOptimaSection = () => {
  return (
    <section className="spioptima-section">
      <div className="spioptima-text">
        <div className="logo-row">
          <img
            src={logo}
            alt="SpiOptima logo"
            className="logo-icon"
          />
        </div>

        <h1>
          Agri-Intelligence & Smart <br />
          Financing with SpiOptima
        </h1>

        <p>
          SPIDA tackles climate uncertainty and lack of access to finance by using climate data to
          predict weather, simulate farms for better planning, and build farmer credit profiles from
          non-traditional data. With SpiOptima, farmers access better loans, banks reduce risk, and
          data-driven models help forecast, insure, and score farmers for sustainable lending. The
          result: confidence for lenders, real opportunities for farmers.
        </p>

        <div className="buttons">
          <a href="https://spioptima.spida.africa" className="btn green">Visit Product website</a>
          <a href="#" className="btn outline">Watch Demo</a>
        </div>
      </div>

      <div className="spioptima-image">
        <img
          src={img1}
          alt="Farmer working"
        />
      </div>
    </section>
  );
};

export default SpiOptimaSection;
