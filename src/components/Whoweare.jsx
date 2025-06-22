import React from "react";
import "./Whoweare.css";
import wo from '../assets/wo.jpg';

const WhoWeAre = () => {
  return (
    <div className="who-container">
      <div className="who-image">
        <img
          src={wo} // Replace with your actual image URL
          alt="Smart Farming"
        />
      </div>
      <div className="who-text">
        <h2>Who We Are</h2>
        <p>
          We are an innovative AgriTech powerhouse leveraging cutting-edge technologies
          including Artificial Intelligence, IoT and Machine Learning to eliminate
          inefficiencies and transform Africa’s agri–value chains into engines of prosperity.
        </p>
        <p>
          But we don’t just use technology for its own sake. We use it to empower farmers,
          improve livelihoods and build sustainable wealth across communities. Our end-to-end
          solutions tackle the most pressing challenges faced by African farmers, from
          improving production and providing actionable Agri–intelligence to enabling strategic
          smallholder financing and securing guaranteed market access. We're building a smarter,
          more inclusive agricultural ecosystem that works for everyone.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
