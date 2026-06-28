import React from 'react';
import { VenueTabs } from '../components/VenueTabs';
import { FaPlane, FaSubway, FaPassport } from 'react-icons/fa';

export const Travel: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(233, 84, 32, 0.08)', color: 'var(--vf-color-brand)', borderColor: 'rgba(233, 84, 32, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Venue & Travel
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Travel & Visa Information
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Transit details and requirements for reaching New Delhi.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaPlane style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <VenueTabs />

      {/* Section 1: Transit Guidelines (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1.5rem' }}>Transit Guidelines</h3>
            <p className="p-text--lead">
              New Delhi is highly connected both domestically and internationally. 
              Below is the travel and transit guidance for UbuCon India 2026.
            </p>

            <h4 style={{ display: 'flex', alignItems: 'center', color: 'var(--vf-color-brand)', fontWeight: 700 }}>
              <FaPlane style={{ marginRight: '0.75rem' }} /> Arriving by Air
            </h4>
            <p>
              <strong>Indira Gandhi International Airport (DEL)</strong> is the primary international and domestic hub for New Delhi. 
              The airport is located about 16 km from the venue. You can easily take the high-speed <strong>Delhi Airport Metro Express (Orange Line)</strong> from Terminal 3 to New Delhi Metro Station, and switch lines to reach Janpath.
            </p>

            <h4 style={{ display: 'flex', alignItems: 'center', color: 'var(--vf-color-brand)', fontWeight: 700 }}>
              <FaSubway style={{ marginRight: '0.75rem' }} /> Local Public Transport (Delhi Metro)
            </h4>
            <p>
              The Delhi Metro is the fastest and most convenient way to travel within the city. 
              The venue is adjacent to the <strong>Janpath Metro Station (Violet Line)</strong> and is only a short walk from <strong>Patel Chowk Metro Station (Yellow Line)</strong>.
            </p>
          </div>

          <div className="col-4 col-medium-1">
            <div className="p-card" style={{ backgroundColor: '#fcfcfc' }}>
              <h4 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Quick Stats</h4>
              <hr className="p-rule" />
              <ul className="p-list">
                <li><strong>Airport Code:</strong> DEL</li>
                <li><strong>Nearest Metro:</strong> Janpath (Violet)</li>
                <li><strong>Uber/Ola:</strong> Fully Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visa Requirements (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaPassport style={{ marginRight: '0.75rem', color: 'var(--vf-color-brand)' }} /> Visa Requirements
            </h3>
            <p>
              Most international visitors will need a visa to enter India. 
              India offers an <strong>e-Conference Visa</strong> or <strong>e-Tourist Visa</strong> for citizens of most countries. 
              We recommend applying at least 4-6 weeks prior to the event. 
              Please consult the official Indian Visa website for requirements and updates.
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: '#ffffff' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: 'var(--vf-color-accent)' }}>Visa Invitation Letters</h5>
                <p className="p-notification__message">
                  If you require an official visa invitation letter to support your application, please register for a ticket and request an invitation letter through our registration portal or by emailing <a href="mailto:visa@ubucon.in">visa@ubucon.in</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-brand)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5>Consular Process</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Please check with your local Indian Embassy or High Commission to ensure correct entry procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Travel;
