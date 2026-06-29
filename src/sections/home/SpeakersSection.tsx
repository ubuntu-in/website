import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SpeakersSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="p-strip--light">
      <div className="row">
        <h2 className="u-align--center home-section-title">Featured Speakers</h2>
        <hr className="p-rule home-speakers-divider" />
      </div>
      <div className="row">
        <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
          <div className="p-card u-align--center home-speaker-card">
            <img 
              src="https://ui-avatars.com/api/?name=Amit+Sharma&background=772953&color=fff&size=120&bold=true" 
              alt="Dr. Amit Sharma" 
              className="home-speaker-img"
            />
            <h4 className="p-card__title home-speaker-name">Dr. Amit Sharma</h4>
            <p className="u-text--muted home-speaker-role">Cloud Architect</p>
            <p className="p-card__content home-speaker-desc">Specialist in deploying scalable enterprise Kubernetes workloads on Ubuntu Server.</p>
          </div>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
          <div className="p-card u-align--center home-speaker-card">
            <img 
              src="https://ui-avatars.com/api/?name=Priya+Patel&background=e95420&color=fff&size=120&bold=true" 
              alt="Priya Patel" 
              className="home-speaker-img"
            />
            <h4 className="p-card__title home-speaker-name">Priya Patel</h4>
            <p className="u-text--muted home-speaker-role">Ubuntu Desktop Eng</p>
            <p className="p-card__content home-speaker-desc">Contributing to desktop packaging, Snaps development, and custom flavors.</p>
          </div>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
          <div className="p-card u-align--center home-speaker-card">
            <img 
              src="https://ui-avatars.com/api/?name=Rajesh+Kumar&background=333333&color=fff&size=120&bold=true" 
              alt="Rajesh Kumar" 
              className="home-speaker-img"
            />
            <h4 className="p-card__title home-speaker-name">Rajesh Kumar</h4>
            <p className="u-text--muted home-speaker-role">FOSS Advocate</p>
            <p className="p-card__content home-speaker-desc">Advocating for digital sovereignty and localization initiatives across public services.</p>
          </div>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
          <div className="p-card u-align--center home-speaker-card">
            <img 
              src="https://ui-avatars.com/api/?name=Ananya+Rao&background=e95420&color=fff&size=120&bold=true" 
              alt="Ananya Rao" 
              className="home-speaker-img"
            />
            <h4 className="p-card__title home-speaker-name">Ananya Rao</h4>
            <p className="u-text--muted home-speaker-role">Kernel Developer</p>
            <p className="p-card__content home-speaker-desc">Debugging system architectures, device drivers, and security modules on Linux kernels.</p>
          </div>
        </div>
      </div>
      <div className="row u-align--center home-speakers-button-container">
        <button className="btn-secondary" onClick={() => navigate('/cfp')}>
          Submit your proposal to speak
        </button>
      </div>
    </section>
  );
};
