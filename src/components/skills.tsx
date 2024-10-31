import React from 'react';
import './skills.css';

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <span>Procreate</span>
        <span>Canva</span>
        <span>STUDIO</span>
        <span>Figma</span>
        <span>Adobe XD</span>
        <span>React.js</span>
        <span>Next.js</span>
        <span>React Native</span>
      </div>
    </div>
  );
};

export default SkillsSection;
