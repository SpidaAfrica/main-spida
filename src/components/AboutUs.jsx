import React from 'react';
import './AboutUs.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';


const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-images">
          <div className="grid-top">
            <img src={img1} alt="Image 1" />
            <img src={img2} alt="Image 2" />
          </div>
          <div className="grid-bottom">
            <img src={img3} alt="Image 3" />
            <img src={img4} alt="Image 4" />
          </div>
        </div>

        <div className="about-text">
          <h2>About us</h2>
          <p>
            For too long, Africa’s agricultural sector has remained fragmented, inefficient, and
            unpredictable. Farmers work hard, yet harvests are low, markets are unreliable, and
            profits disappear before they arrive.
          </p>
          <p>
            At SPIDA we believe it’s time to change this story. Using advanced technology, smart
            data, and innovation tailored to Africa’s realities, we’re creating a connected food
            system that delivers:
          </p>
          <ul>
            <li>Higher productivity per acre</li>
            <li>Guaranteed logistics and access to finance</li>
            <li>Assured sales to paying customers</li>
          </ul>
          <p>Farmers no longer need to worry about:</p>
          <ul>
            <li>How to fund their inputs</li>
            <li>How to plough their fields</li>
            <li>How to access buyers</li>
          </ul>
          <p>We handle it all. Farmers focus on what they love—growing food.</p>

          <div className="about-buttons">
            <a href='/About'>
              <button className="green-btn">Learn more about us</button>
            </a>
            {/*<button className="outline-btn">See Products</button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
