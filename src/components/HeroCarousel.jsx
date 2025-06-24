/*import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import hero1 from '../assets/bg1.png';
import hero2 from '../assets/bg2.jpg';
import hero3 from '../assets/bg3.jpg';

const slides = [
  {
    image: hero1,
    headline: "Powering Africa’s Agricultural Revolution with Smart Technology.",
    text: "From fragmented systems to connected abundance SPIDA is here to transform African agriculture."
  },
  {
    image: hero2,
    headline: "Connecting Farmers to Finance & Intelligence.",
    text: "SpiOptima empowers decision-making through smart insights and access to funding."
  },
  {
    image: hero3,
    headline: "Boosting Agricultural Productivity with Smart Tools.",
    text: "SpiTractor helps farmers do more with less through efficient mechanization."
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="text-box">
              <h1>{slide.headline}</h1>
              <p>{slide.text}</p>
              <div className="buttons">
                <button className="green">See How we do it</button>
                <button className="transparent">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
*/
import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import hero1 from '../assets/bg1.png';
import hero2 from '../assets/bg2.jpg';
import hero3 from '../assets/bg3.jpg';

const slides = [
    {
        image: hero1,
        headline: "Connecting Farmers to Finance & Intelligence.",
        text: "SpiOptima empowers decision-making through smart insights and access to funding.",
        link: "https://spioptima.spida.africa"
    },
  {
    image: hero2,
    headline: "Powering Africa’s Agricultural Revolution with Smart Technology.",
    text: "From fragmented systems to connected abundance SPIDA is here to transform African agriculture.",
    link: "https://spi-ecommerce.spida.africa"
  },
  {
    image: hero3,
    headline: "Boosting Agricultural Productivity with Smart Tools.",
    text: "SpiTractor helps farmers do more with less through efficient mechanization.",
    link: "https://spi-tractors.spida.africa"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="text-box">
              <h1>{slide.headline}</h1>
              <p>{slide.text}</p>
              <div className="buttons">
                <a href={slide.link}>
                 <button className="green">See How we do it</button>
                </a>
                <button className="transparent">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

