import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="p-strip about-hero-section">
      <div className="row u-vertically-center">
        <div className="col-8 col-medium-5">
          <span className="p-status-label about-hero-status">
            Event Information
          </span>
          <h1 className="about-hero-title">
            About UbuCon India 2026
          </h1>
          <p className="p-text--lead u-no-margin about-hero-lead">
            Connecting the local FOSS and Ubuntu communities in India.
          </p>
        </div>
        <div className="col-4 col-medium-1 u-align--center">
          <FaInfoCircle className="about-hero-icon" />
        </div>
      </div>
    </section>
  );
};
