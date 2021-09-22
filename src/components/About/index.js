import React from 'react';
import MissionCards from './MissionCards';
import MissionStatement from './MissionStatement';

function About() {
  return (
    <div className="about-container container">
      <MissionStatement />
      <MissionCards />
    </div>
  );
}

export default About;
