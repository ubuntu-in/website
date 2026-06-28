import React from 'react';
import { SponsorTabs } from '../components/SponsorTabs';
import { FaMedal } from 'react-icons/fa';

export const Sponsors: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--vf-color-accent)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Sponsors & Partners
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Become a Sponsor
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Support the largest Ubuntu conference in India.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaMedal style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <SponsorTabs />

      {/* Section 1: Intro / Why Sponsor (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3>Why Sponsor UbuCon India 2026?</h3>
            <p className="p-text--lead">
              Sponsoring UbuCon India 2026 is an excellent opportunity to promote your brand, products, and services 
              to open-source developers, system engineers, IT decision-makers, and students from across India.
            </p>
            <p>
              Your sponsorship helps us cover the cost of the venue, catering, recording equipment, travel grants for speakers, 
              and event materials, keeping ticket prices low and accessible to students and community members.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-brand)', height: '100%' }}>
              <h5>Impact the FOSS Ecosystem</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Gain visibility among regional Linux leaders, educators, and enterprise system administrators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sponsorship Packages & Tiers (Light Orange background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-12">
            <h3 className="u-align--center" style={{ color: '#2c001e', fontWeight: 700, marginBottom: '2rem' }}>Sponsorship Packages & Tiers</h3>
          </div>
        </div>
        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Gold Tier */}
          <div className="p-card" style={{ flex: '1', borderTop: '4px solid #ffd700', backgroundColor: '#ffffff' }}>
            <h4 className="u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaMedal style={{ color: '#ffd700', marginRight: '0.5rem' }} /> Gold
            </h4>
            <hr className="p-rule" />
            <ul className="p-list">
              <li>Large booth in exhibition hall</li>
              <li>Keynote slot / presentation</li>
              <li>Logo on all promotional banners & badges</li>
              <li>3 free registration passes</li>
            </ul>
          </div>

          {/* Silver Tier */}
          <div className="p-card" style={{ flex: '1', borderTop: '4px solid #c0c0c0', backgroundColor: '#ffffff' }}>
            <h4 className="u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaMedal style={{ color: '#c0c0c0', marginRight: '0.5rem' }} /> Silver
            </h4>
            <hr className="p-rule" />
            <ul className="p-list">
              <li>Standard booth in exhibition hall</li>
              <li>30-minute speaking session</li>
              <li>Logo on website & slide templates</li>
              <li>2 free registration passes</li>
            </ul>
          </div>

          {/* Bronze Tier */}
          <div className="p-card" style={{ flex: '1', borderTop: '4px solid #cd7f32', backgroundColor: '#ffffff' }}>
            <h4 className="u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaMedal style={{ color: '#cd7f32', marginRight: '0.5rem' }} /> Bronze
            </h4>
            <hr className="p-rule" />
            <ul className="p-list">
              <li>Banner roll-up space in venue</li>
              <li>Logo on website & sponsor slides</li>
              <li>Social media announcement logo</li>
              <li>1 free registration pass</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Specialized Opportunities & Contact (Light Aubergine background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(119, 41, 83, 0.04)', borderBottom: '1px solid rgba(119, 41, 83, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3>Specialized Sponsorships</h3>
            <p>
              We also offer specialized options, such as sponsoring the social dinner, coffee breaks, or student travel grants. 
              These sponsorships are highly custom and offer targeted exposure.
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: '#ffffff' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title">Get in Touch</h5>
                <p className="p-notification__message">
                  Interested in sponsoring or have custom package requests? 
                  Please email us at <a href="mailto:sponsors@ubucon.in">sponsors@ubucon.in</a> to receive our complete sponsorship prospectus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5>Custom Packages</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                We work closely with partners to build sponsorships that align perfectly with your marketing goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Sponsors;
