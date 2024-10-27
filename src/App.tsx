import './App.css'
import React from 'react';

import HeroSection from './components/hero.tsx';
import AboutSection from './components/about.tsx';
import SkillsSection from './components/skills.tsx';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default App;