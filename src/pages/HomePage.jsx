// src/pages/Home.js
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutUs from '../components/AboutUs';
import ProblemStatement from '../components/ProblemStatement';
import SpiOptimaSection from '../components/SpiOptimaSection';
import SpiTractor from '../components/Spitractor';
import Spida from '../components/Spida';
import FAQ from '../components/Faq';
//import Blog from '../components/Blog';

const HomePage = () => {
  return (
    <div>
      <HeroCarousel/>
      <AboutUs/>
      <ProblemStatement/>
      <SpiTractor/>
      <SpiOptimaSection/>
      <Spida/>
      <FAQ/>

    </div>
  );
};

export default HomePage;
