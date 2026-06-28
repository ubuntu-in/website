import React from 'react';
import { SponsorTabs } from '../components/SponsorTabs';
import { FaHandshake } from 'react-icons/fa';

export const OurSponsors: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--vf-color-accent)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Sponsors & Partners
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Our Sponsors
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Acknowledge the organizations supporting UbuCon India 2026.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaHandshake style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <SponsorTabs />

      {/* Section 1: Principal Sponsor (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-12 u-align--center">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1rem' }}>Principal Sponsor</h3>
            <p className="p-text--lead" style={{ marginBottom: '2.5rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
              We are incredibly grateful for the leadership and support of our Principal Sponsor in making UbuCon India a reality.
            </p>
          </div>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '280px', height: '120px', padding: '1.5rem', backgroundColor: '#fcfcfc', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <img 
              src="https://logo.clearbit.com/canonical.com" 
              alt="Canonical" 
              style={{ maxHeight: '50px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
            />
          </div>
        </div>
      </section>

      {/* Section 2: Gold Sponsors (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-12 u-align--center">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1rem' }}>Gold Sponsors</h3>
            <p className="p-text--lead" style={{ marginBottom: '2.5rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
              Our Gold sponsors contribute significantly to our venue operations, speaker support, and community travel grants.
            </p>
          </div>
        </div>
        <div className="row" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '240px', height: '100px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <img 
              src="https://logo.clearbit.com/debian.org" 
              alt="Debian" 
              style={{ maxHeight: '40px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
            />
          </div>
          <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '240px', height: '100px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <img 
              src="https://logo.clearbit.com/gnome.org" 
              alt="GNOME" 
              style={{ maxHeight: '40px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
            />
          </div>
          <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '240px', height: '100px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <img 
              src="https://logo.clearbit.com/github.com" 
              alt="GitHub" 
              style={{ maxHeight: '40px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default OurSponsors;
