// src/pages/Home.js
import React from 'react';
import AboutUsHero from '../components/AboutUsHero';
import WhoWeAre from '../components/Whoweare';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/Faq';
import Blog from '../components/Blog';

const AboutPage = () => {
  return (
    <div>
        <AboutUsHero/>
        <WhoWeAre/>
        <WhatWeDo/>
        <FAQ/>
        <Blog/>
    </div>
  );
};

export default AboutPage;
