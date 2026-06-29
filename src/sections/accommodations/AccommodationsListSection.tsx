import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const AccommodationsListSection: React.FC = () => {
  return (
    <section className="p-strip accommodations-list-section">
      <div className="row">
        <div className="col-12">
          <h3 className="accommodations-section-title">Accommodations near Janpath</h3>
          <p className="p-text--lead accommodations-list-lead">
            The venue is situated in central New Delhi (Janpath), close to Connaught Place. 
            There are numerous hotels nearby catering to different budgets.
          </p>
        </div>
      </div>
      
      <div className="row accommodations-cards-container">
        {/* Premium Hotels */}
        <div className="accommodations-card-wrapper">
          <div className="p-card accommodations-card accommodations-card--premium">
            <div className="accommodations-card-header">
              <h4 className="u-no-margin accommodations-card-title">Premium</h4>
              <span className="p-status-label--positive accommodations-card-price">$$$$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li className="accommodations-item">
                <strong>The Imperial New Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Historic luxury hotel | <FaMapMarkerAlt className="accommodations-item-icon" /> 0.2 km from venue
                </small>
              </li>
              <li className="accommodations-item">
                <strong>Shangri-La Eros Hotel</strong>
                <br />
                <small className="u-text--muted">
                  Modern luxury | <FaMapMarkerAlt className="accommodations-item-icon" /> 0.4 km from venue
                </small>
              </li>
              <li className="accommodations-item">
                <strong>Le Meridien New Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Modern high-rise | <FaMapMarkerAlt className="accommodations-item-icon" /> 0.5 km from venue
                </small>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid-Range Hotels */}
        <div className="accommodations-card-wrapper">
          <div className="p-card accommodations-card accommodations-card--mid">
            <div className="accommodations-card-header">
              <h4 className="u-no-margin accommodations-card-title">Mid-Range</h4>
              <span className="p-status-label--information accommodations-card-price">$$ - $$$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li className="accommodations-item">
                <strong>Connaught Royale Delhi</strong>
                <br />
                <small className="u-text--muted">
                  Boutique experience | <FaMapMarkerAlt className="accommodations-item-icon" /> 1.2 km from venue
                </small>
              </li>
              <li className="accommodations-item">
                <strong>Hotel Royal Plaza</strong>
                <br />
                <small className="u-text--muted">
                  Standard rooms & pool | <FaMapMarkerAlt className="accommodations-item-icon" /> 0.5 km from venue
                </small>
              </li>
              <li className="accommodations-item">
                <strong>Hotel Jukaso Inn</strong>
                <br />
                <small className="u-text--muted">
                  Comfortable stay | <FaMapMarkerAlt className="accommodations-item-icon" /> 1.5 km from venue
                </small>
              </li>
            </ul>
          </div>
        </div>

        {/* Budget Hotels */}
        <div className="accommodations-card-wrapper">
          <div className="p-card accommodations-card accommodations-card--budget">
            <div className="accommodations-card-header">
              <h4 className="u-no-margin accommodations-card-title">Budget & Hostels</h4>
              <span className="p-status-label accommodations-card-price">$</span>
            </div>
            <hr className="p-rule" />
            <ul className="p-list">
              <li className="accommodations-item">
                <strong>Zostel Delhi (CP)</strong>
                <br />
                <small className="u-text--muted">
                  Social backpacker hostel | <FaMapMarkerAlt className="accommodations-item-icon" /> 1.8 km from venue
                </small>
              </li>
              <li className="accommodations-item">
                <strong>Paharganj Guesthouses</strong>
                <br />
                <small className="u-text--muted">
                  Budget-friendly lodges | <FaMapMarkerAlt className="accommodations-item-icon" /> 2.5 km (10 mins via Metro)
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
