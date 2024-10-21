import './App.css'

import HeroSection from './components/hero';
import AboutSection from './components/about';
import SkillsSection from './components/skills';

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