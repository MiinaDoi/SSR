import React from 'react';
import './hero.css';
import heroImage from '../assets/hero-image.png'

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">SUGAR</h1>
        <p className="hero-subtitle">FRONT-END DEVELOPER</p>
      </div>
    </div>
  );
};

export default HeroSection;
