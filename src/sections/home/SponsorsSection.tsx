import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SponsorsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="p-strip home-sponsors-section" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="row">
        <h2 className="u-align--center home-sponsors-title">Sponsors & Partners</h2>
      </div>

      {/* Tier 1: Principal Sponsor */}
      <div className="row home-sponsor-tier-container">
        <h4 className="home-sponsor-tier-title">
          Principal Sponsor
        </h4>
        <div className="col-4 col-medium-2 home-sponsor-card-wrapper">
          <div className="p-card u-align--center home-sponsor-card">
            <img 
              src="https://logo.clearbit.com/canonical.com" 
              alt="Canonical" 
              className="home-sponsor-img"
            />
          </div>
        </div>
      </div>

      {/* Tier 2: Gold Sponsors */}
      <div className="row home-sponsor-tier-container">
        <h4 className="home-sponsor-tier-title home-sponsor-tier-title-alt">
          Gold Sponsors & Partners
        </h4>
        <div className="home-sponsor-grid">
          <div className="p-card u-align--center home-sponsor-card home-sponsor-card-small">
            <img 
              src="https://logo.clearbit.com/debian.org" 
              alt="Debian" 
              className="home-sponsor-img home-sponsor-img-small"
            />
          </div>
          <div className="p-card u-align--center home-sponsor-card home-sponsor-card-small">
            <img 
              src="https://logo.clearbit.com/gnome.org" 
              alt="GNOME" 
              className="home-sponsor-img home-sponsor-img-small"
            />
          </div>
          <div className="p-card u-align--center home-sponsor-card home-sponsor-card-small">
            <img 
              src="https://logo.clearbit.com/github.com" 
              alt="GitHub" 
              className="home-sponsor-img home-sponsor-img-small"
            />
          </div>
        </div>
      </div>

      <div className="row u-align--center home-sponsor-button-container">
        <button className="btn-secondary" onClick={() => navigate('/sponsors')}>
          Become a Sponsor
        </button>
      </div>
    </section>
  );
};
