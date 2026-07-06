import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import { eventConfig } from '../../config/eventConfig';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="p-strip home-hero-section">
      <div className="row u-vertically-center home-hero-row">
        <div className="col-7 col-medium-4">
          <span className="p-status-label--positive home-hero-status">
            Registration Open
          </span>
          <h1 className="p-hero__title home-hero-title">
            UbuCon India {eventConfig.year}
          </h1>
          
          <div className="home-hero-list-container">
            <ul className="p-inline-list home-hero-list">
              <li className="home-hero-list-item">
                <FaCalendarAlt className="home-hero-list-icon" />
                <span>November 14-15, 2026</span>
              </li>
              <li className="home-hero-list-item">
                <FaMapMarkerAlt className="home-hero-list-icon" />
                <span>{eventConfig.venue.shortName}, {eventConfig.venue.city}</span>
              </li>
              <li className="home-hero-list-item">
                <FaTicketAlt className="home-hero-list-icon" />
                <span>Free Registration</span>
              </li>
            </ul>
          </div>

          <p className="p-text--lead home-hero-lead">
            UbuCon India is the premier community-organized conference for Ubuntu and FOSS enthusiasts in India. 
            Join developers, designers, system administrators, and contributors from across the country for two days of learning, hacking, and networking.
          </p>
          <div className="home-hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/tickets')}>
              Register Now
            </button>
            <button className="btn-secondary" onClick={() => navigate('/cfp')}>
              Submit Proposal
            </button>
          </div>
        </div>
        <div className="col-5 col-medium-2 u-align--center">
          <img 
            src="/logo.png" 
            alt="UbuCon India Logo" 
            className="home-hero-logo"
          />
        </div>
      </div>
    </section>
  );
};
