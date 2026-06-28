import React from 'react';
import { FaBed } from 'react-icons/fa';

export const AccommodationsHeroSection: React.FC = () => {
  return (
    <section className="p-strip accommodations-hero-section">
      <div className="row u-vertically-center">
        <div className="col-8 col-medium-5">
          <span className="p-status-label accommodations-hero-status">
            Venue & Travel
          </span>
          <h1 className="accommodations-hero-title">
            Accommodations
          </h1>
          <p className="p-text--lead u-no-margin accommodations-hero-lead">
            Find the perfect place to stay near Janpath, New Delhi.
          </p>
        </div>
        <div className="col-4 col-medium-1 u-align--center">
          <FaBed className="accommodations-hero-icon" />
        </div>
      </div>
    </section>
  );
};
