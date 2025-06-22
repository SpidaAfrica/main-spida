
/*import React from 'react';
import StrategyHero from '../components/StrategyHero';


const Strategy = () => {
  return (
    <div>
        <StrategyHero/>
    </div>
  );
};

export default Strategy;
*/
// src/pages/Home.js
import React from 'react';
import StrategyHero from '../components/StrategyHero';
import VisionMission from '../components/VisionMission';
import FoundersComponent from '../components/FoundersComponent';
import CoreValues from '../components/CoreValues';

const Strategy = () => {
  return (
    <div>
        <StrategyHero/>
        <VisionMission/>
        <CoreValues/>
        <FoundersComponent/>
    </div>
  );
};

export default Strategy;

