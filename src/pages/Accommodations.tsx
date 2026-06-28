import React from 'react';
import { VenueTabs } from '../components/VenueTabs';
import './Accommodations.scss';
import { AccommodationsHeroSection } from '../sections/accommodations/AccommodationsHeroSection';
import { AccommodationsListSection } from '../sections/accommodations/AccommodationsListSection';
import { AccommodationsTipsSection } from '../sections/accommodations/AccommodationsTipsSection';

export const Accommodations: React.FC = () => {
  return (
    <main className="accommodations-page">
      <AccommodationsHeroSection />
      <VenueTabs />
      <AccommodationsListSection />
      <AccommodationsTipsSection />
    </main>
  );
};
export default Accommodations;
