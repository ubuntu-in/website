import React from 'react';
import './Home.scss';
import { HeroSection } from '../sections/home/HeroSection';
import { CountdownSection } from '../sections/home/CountdownSection';
import { VideoSection } from '../sections/home/VideoSection';
import { SpeakersSection } from '../sections/home/SpeakersSection';
import { SponsorsSection } from '../sections/home/SponsorsSection';

export const Home: React.FC = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <CountdownSection />
      <VideoSection />
      <SpeakersSection />
      <SponsorsSection />
    </main>
  );
};
export default Home;
