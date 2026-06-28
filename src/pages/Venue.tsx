import React from 'react';
import { VenueTabs } from '../components/VenueTabs';
import { FaUniversalAccess, FaMapMarkedAlt } from 'react-icons/fa';

export const Venue: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(233, 84, 32, 0.08)', color: 'var(--vf-color-brand)', borderColor: 'rgba(233, 84, 32, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Venue & Travel
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Venue & Safety
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Everything you need to know about the convention venue.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaMapMarkedAlt style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <VenueTabs />

      {/* Section 1: Venue Overview (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Dr. Ambedkar International Centre (DAIC)</h3>
            <p className="p-text--lead">
              UbuCon India 2026 will take place in the state-of-the-art conference facilities of the 
              <strong> Dr. Ambedkar International Centre</strong>, located in the heart of India's capital city, New Delhi.
            </p>
            <p>
              DAIC is a modern building designed to host national and international conventions. 
              It features fully air-conditioned auditoriums, multiple discussion halls, an exhibition gallery, and high-speed Wi-Fi connectivity throughout.
            </p>
          </div>

          <div className="col-4 col-medium-1">
            <div className="p-card" style={{ backgroundColor: '#fcfcfc' }}>
              <h4 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Venue Highlights</h4>
              <hr className="p-rule" />
              <ul className="p-list">
                <li>Modern Auditorium</li>
                <li>Catering Areas</li>
                <li>Sponsor Exhibition Hall</li>
                <li>Janpath Metro Connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Address & Accessibility (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
              <FaUniversalAccess style={{ marginRight: '0.75rem', color: 'var(--vf-color-brand)' }} /> Accessibility & Inclusivity
            </h3>
            <p>
              The venue is fully wheelchair-accessible with ramps, elevators, and dedicated seating spaces in the main auditoriums. 
              Dedicated restrooms for individuals with disabilities are available on all floors. 
              If you have specific accessibility requests or require assistance, please contact us.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-brand)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5 style={{ fontWeight: 700 }}>Address</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                15, Janpath Rd, Windsor Place, 
                <br />New Delhi, Delhi 110001, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Venue;
