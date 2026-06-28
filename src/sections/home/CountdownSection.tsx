import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Countdown } from '../../components/Countdown';

export const CountdownSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="p-strip">
      <div className="row">
        <div className="col-6 col-medium-3">
          <Countdown />
        </div>
        <div className="col-6 col-medium-3 u-vertically-center home-overview-text-container">
          <h3 className="home-section-title">An event for everyone with FOSS and Ubuntu in common</h3>
          <p>
            UbuCon India connects open source developers, creators, researchers, entrepreneurs, and contributors. 
            Whether you are an industry veteran or just beginning your journey, there is something for everyone.
          </p>
          <button className="btn-secondary" onClick={() => navigate('/about')}>
            Learn more about UbuCon India
          </button>
        </div>
      </div>
    </section>
  );
};
