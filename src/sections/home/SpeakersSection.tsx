import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const speakers = [
  {
    id: 1,
    name: 'Dr. Amit Sharma',
    role: 'Cloud Architect',
    desc: 'Specialist in deploying scalable enterprise Kubernetes workloads on Ubuntu Server.',
    bg: '772953'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Ubuntu Desktop Eng',
    desc: 'Contributing to desktop packaging, Snaps development, and custom flavors for the next generation of Linux desktop users.',
    bg: 'e95420'
  },
  {
    id: 3,
    name: 'Ananya Rao',
    role: 'Kernel Developer',
    desc: 'Debugging system architectures, device drivers, and security modules on Linux kernels.',
    bg: 'e95420'
  },
  {
    id: 4,
    name: 'Rajesh Kumar',
    role: 'FOSS Advocate',
    desc: 'Advocating for digital sovereignty and localization initiatives across public services.',
    bg: '333333'
  }
];

export const SpeakersSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSpeaker = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  return (
    <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark-alt)' }}>
      <div className="row">
        <h2 className="u-align--center home-section-title">Featured Speakers</h2>
        <hr className="p-rule home-speakers-divider" />
      </div>
      <div className="row u-align--center">
        <div className="speaker-carousel-container">
          <button className="speaker-carousel-arrow left" onClick={prevSpeaker}>
            <FaChevronLeft />
          </button>
          
          <div className="speaker-carousel-track">
            {speakers.map((speaker, index) => {
              let position = 'hidden';
              if (index === currentIndex) position = 'active';
              else if (index === (currentIndex - 1 + speakers.length) % speakers.length) position = 'prev';
              else if (index === (currentIndex + 1) % speakers.length) position = 'next';

              return (
                <div 
                  key={speaker.id} 
                  className={`speaker-carousel-card ${position}`}
                  onClick={() => {
                    if (position === 'prev') prevSpeaker();
                    if (position === 'next') nextSpeaker();
                  }}
                >
                  <img 
                    src={`https://ui-avatars.com/api/?name=${speaker.name.replace(/ /g, '+')}&background=${speaker.bg}&color=fff&size=140&bold=true`} 
                    alt={speaker.name} 
                    className="home-speaker-img"
                  />
                  <div className="home-speaker-info">
                    <h4 className="home-speaker-name">{speaker.name}</h4>
                    <p className="home-speaker-role">{speaker.role}</p>
                    <p className="home-speaker-desc">{speaker.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="speaker-carousel-arrow right" onClick={nextSpeaker}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="row u-align--center home-speakers-button-container" style={{ marginTop: '3rem' }}>
        <button className="btn-secondary" onClick={() => navigate('/cfp')}>
          Submit your proposal to speak
        </button>
      </div>
    </section>
  );
};

