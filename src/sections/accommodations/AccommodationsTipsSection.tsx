import React from 'react';
import { FaBed, FaInfoCircle } from 'react-icons/fa';

export const AccommodationsTipsSection: React.FC = () => {
  return (
    <section className="p-strip accommodations-tips-section">
      <div className="row">
        <div className="col-8 col-medium-5">
          <h3 className="accommodations-tips-title">
            <FaBed className="accommodations-tips-icon" /> Accommodation Planning
          </h3>
          <p>
            New Delhi is a major travel destination and hotels in central locations (especially near Connaught Place and Janpath) fill up quickly. 
            We highly recommend booking your hotel room at least 3-4 weeks in advance.
          </p>
          <div className="p-notification--information accommodations-notification">
            <div className="p-notification__content">
              <h5 className="p-notification__title accommodations-notification-title">Metro Commuter Tip</h5>
              <p className="p-notification__message">
                If central Delhi accommodations exceed your budget, consider staying near any Metro station along the <strong>Violet Line</strong> or <strong>Yellow Line</strong>. 
                Commuting to the venue via Metro is fast, affordable, and bypasses local traffic entirely.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 col-medium-1 u-vertically-center">
          <div className="p-card accommodations-verification-card">
            <h5 className="accommodations-verification-title">
              <FaInfoCircle className="accommodations-verification-icon" /> Verification
            </h5>
            <p className="accommodations-verification-text">
              Always verify the registration details, local taxes, and cancellation policies of the booking platform prior to confirming your room reservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
