import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <h2 className="section-heading">Our Vision and Mission</h2>

      <div className="text-block">
        <h3>Vision</h3>
        <p>
          To become a leading AgriTech company in Africa leveraging smart technology
          to deliver sustainable, inclusive, and scalable agricultural solutions that
          delivers net-positive outcome to all stakeholders by 2050.
        </p>
      </div>

      <div className="text-block">
        <h3>Mission</h3>
        <p>
          To leverage cutting-edge technology, smart financing, and data intelligence
          to eliminate inefficiencies in Africa’s agricultural value chain, to boost
          farmers productivity, unlock access to markets, and reduce food insecurity.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
