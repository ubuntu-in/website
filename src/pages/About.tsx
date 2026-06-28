import React from 'react';
import '../styles/About.scss';
import { AboutHeroSection } from '../sections/about/AboutHeroSection';
import { AboutIntroSection } from '../sections/about/AboutIntroSection';
import { AboutValuesSection } from '../sections/about/AboutValuesSection';

export const About: React.FC = () => {
  return (
    <main className="about-page">
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutValuesSection />
    </main>
  );
};
export default About;
