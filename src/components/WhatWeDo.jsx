import React from "react";
import "./WhatWeDo.css";
import img from "../assets/we3.png";
import img1 from "../assets/we1.png";
import img2 from "../assets/we2.png";
import img3 from "../assets/we.png";

const products = [
  {
    title: "Smart Mechanization with SpiTractor",
    description:
      "We form AI-powered virtual farm clusters so smallholder farmers can access and share tractors affordably—ditching manual labor for horsepower and boosting yields up to 3x. Our AI Extension Agents also deliver real-time, localized farming advice straight to the farmer’s phone.",
    image: img,
    link: "https://spitractors.spida.africa"
  },
  {
    title: "Agri-Intelligence & Smart Financing with SpiOptima",
    description:
      "We solve climate and finance barriers by helping farmers simulate their farms, predict weather, and build solid credit profiles—even without traditional collateral. This gives lenders confidence, and turns farmers into bankable entrepreneurs.",
    image: img3,
    link: "https://spioptima.spida.africa"
  },
  {
    title: "Integrated Logistics for Zero Waste",
    description:
      "Up to 50% of African produce is lost after harvest. SPIDA solves this with verified transport partners, real-time produce tracking, and quality assurance—ensuring food gets from farms to buyers without waste.",
    image: img1,
    link: "https://spi-ecommerce.spida.africa"
  },
  {
    title: "Guaranteed Market with Our e-Marketplace",
    description:
      "No middlemen. Farmers sell directly to consumers, hotels, processors, and supermarkets. That means better prices for farmers, lower costs for buyers, and consistent, high-quality produce for everyone.",
    image: img2,
    link: "https://spi-ecommerce.spida.africa"
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2>What we do</h2>
      <p className="subtitle">
        SPIDA delivers end-to-end agricultural solutions that target the
        critical pressure points faced by African farmers. Here's how
      </p>
      <div className="cards-container">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link}>
              <button>Visit Product website</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
