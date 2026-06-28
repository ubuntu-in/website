import React from 'react';
import { VenueTabs } from '../components/VenueTabs';
import { FaMapMarkerAlt, FaBed, FaInfoCircle } from 'react-icons/fa';

export const Accommodations: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(233, 84, 32, 0.08)', color: 'var(--vf-color-brand)', borderColor: 'rgba(233, 84, 32, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Venue & Travel
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Accommodations
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Find the perfect place to stay near Janpath, New Delhi.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaBed style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <VenueTabs />

      {/* Section 1: Accommodation Cards (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-12">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1rem' }}>Accommodations near Janpath</h3>
            <p className="p-text--lead" style={{ marginBottom: '2.5rem' }}>
              The venue is situated in central New Delhi (Janpath), close to Connaught Place. 
              There are numerous hotels nearby catering to different budgets.
            </p>
          </div>
        </div>
        
        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Premium Hotels */}
          <div className="p-card" style={{ height: '100%', backgroundColor: '#fcfcfc', borderTop: '4px solid var(--vf-color-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 className="u-no-margin" style={{ fontWeight: 700 }}>Premium</h4>
              <span className="p-status-label--positive" style={{ padding: '0.1rem 0.5rem' }}>$$$$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
                <strong>The Imperial New Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Historic luxury hotel | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 0.2 km from venue
                </small>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
                <strong>Shangri-La Eros Hotel</strong>
                <br />
                <small className="u-text--muted">
                  Modern luxury | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 0.4 km from venue
                </small>
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Le Meridien New Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Modern high-rise | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 0.5 km from venue
                </small>
              </li>
            </ul>
          </div>

          {/* Mid-Range Hotels */}
          <div className="p-card" style={{ height: '100%', backgroundColor: '#fcfcfc', borderTop: '4px solid var(--vf-color-brand)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 className="u-no-margin" style={{ fontWeight: 700 }}>Mid-Range</h4>
              <span className="p-status-label--information" style={{ padding: '0.1rem 0.5rem' }}>$$ - $$$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
                <strong>Connaught Royale Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Boutique experience | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 1.2 km from venue
                </small>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
                <strong>Hotel Royal Plaza</strong>
                <br />
                <small className="u-text--muted">
                  Standard rooms & pool | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 0.5 km from venue
                </small>
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Hotel Jukaso Inn</strong>
                <br />
                <small className="u-text--muted">
                  Comfortable stay | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 1.5 km from venue
                </small>
              </li>
            </ul>
          </div>

          {/* Budget Hotels */}
          <div className="p-card" style={{ height: '100%', backgroundColor: '#fcfcfc', borderTop: '4px solid #111111' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 className="u-no-margin" style={{ fontWeight: 700 }}>Budget & Hostels</h4>
              <span className="p-status-label" style={{ padding: '0.1rem 0.5rem' }}>$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li style={{ paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
                <strong>Zostel Delhi (CP)</strong>
                <br />
                <small className="u-text--muted">
                  Social backpacker hostel | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 1.8 km from venue
                </small>
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Paharganj Guesthouses</strong>
                <br />
                <small className="u-text--muted">
                  Budget-friendly lodges | <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> 2.5 km (10 mins via Metro)
                </small>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Booking Tips (Light Aubergine Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(119, 41, 83, 0.04)', borderTop: '1px solid rgba(119, 41, 83, 0.1)', borderBottom: '1px solid rgba(119, 41, 83, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaBed style={{ marginRight: '0.75rem', color: 'var(--vf-color-brand)' }} /> Accommodation Planning
            </h3>
            <p>
              New Delhi is a major travel destination and hotels in central locations (especially near Connaught Place and Janpath) fill up quickly. 
              We highly recommend booking your hotel room at least 3-4 weeks in advance.
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: '#ffffff' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: 'var(--vf-color-accent)' }}>Metro Commuter Tip</h5>
                <p className="p-notification__message">
                  If central Delhi accommodations exceed your budget, consider staying near any Metro station along the <strong>Violet Line</strong> or <strong>Yellow Line</strong>. 
                  Commuting to the venue via Metro is fast, affordable, and bypasses local traffic entirely.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5 style={{ fontWeight: 700 }}><FaInfoCircle style={{ color: 'var(--vf-color-brand)', marginRight: '0.25rem', verticalAlign: 'middle' }} /> Verification</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Always verify the registration details, local taxes, and cancellation policies of the booking platform prior to confirming your room reservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Accommodations;
