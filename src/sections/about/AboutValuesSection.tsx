import React from 'react';
import { FaTerminal, FaUsers, FaRocket } from 'react-icons/fa';

export const AboutValuesSection: React.FC = () => {
  return (
    <section className="p-strip about-values-section">
      <div className="row">
        <div className="col-12 u-align--center">
          <h3 className="about-values-title">Our Values</h3>
        </div>
      </div>
      <div className="about-values-grid">
        {/* Card 1: Advocacy */}
        <div className="about-value-col">
          <div className="p-card about-value-card">
            <div className="about-value-header">
              <div className="about-value-icon-container">
                <FaTerminal className="about-value-icon" />
              </div>
              <h4 className="p-card__title about-value-title">Open Source Advocacy</h4>
            </div>
            <p className="p-card__content about-value-desc">
              We advocate for the adoption of FOSS and the Linux operating system across educational institutions, public services, and businesses.
            </p>
          </div>
        </div>

        {/* Card 2: Community */}
        <div className="about-value-col">
          <div className="p-card about-value-card">
            <div className="about-value-header">
              <div className="about-value-icon-container">
                <FaUsers className="about-value-icon" />
              </div>
              <h4 className="p-card__title about-value-title">Inclusive Community</h4>
            </div>
            <p className="p-card__content about-value-desc">
              We believe in building a welcoming, inclusive, and harassment-free environment for everyone, guided by our Code of Conduct.
            </p>
          </div>
        </div>

        {/* Card 3: Empowerment */}
        <div className="about-value-col">
          <div className="p-card about-value-card">
            <div className="about-value-header">
              <div className="about-value-icon-container">
                <FaRocket className="about-value-icon" />
              </div>
              <h4 className="p-card__title about-value-title">Empowerment</h4>
            </div>
            <p className="p-card__content about-value-desc">
              We empower students, developers, and enthusiasts by providing them with a platform to speak, learn, and grow in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
