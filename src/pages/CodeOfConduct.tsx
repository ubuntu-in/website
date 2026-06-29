import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileSignature } from 'react-icons/fa';

export const CodeOfConduct: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-main)', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--text-main)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Event Information
            </span>
            <h1 style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Code of Conduct
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: 'var(--text-muted)' }}>
              Ensuring a friendly, safe, and welcoming environment for everyone.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaFileSignature style={{ fontSize: '5rem', color: 'var(--text-main)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px var(--overlay-orange-strong))' }} />
          </div>
        </div>
      </section>

      {/* Section 1: CoC Principles (White Background) */}
      <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark-alt)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--text-main)', fontWeight: 700 }}>Our Code of Conduct</h3>
            <p className="p-text--lead">
              Like the Ubuntu community as a whole, UbuCon India is committed to being open, inclusive, and respectful. 
              We expect all participants (attendees, speakers, sponsors, volunteers, and staff) to follow this Code of Conduct at all times.
            </p>

            <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>1. Be Respectful</h4>
            <p>
              Value each other's ideas, styles, and viewpoints. We may not always agree, but disagreement is no excuse for poor behavior and poor manners. 
              We must conduct ourselves professionally, welcoming contributions from everyone regardless of background or experience.
            </p>

            <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>2. Be Collaborative</h4>
            <p>
              Collaboration reduces redundancy and improves the quality of our work. We prefer to work in the open and welcome participation from anyone. 
              We should help others and share what we have learned to make the FOSS ecosystem stronger.
            </p>

            <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>3. Harassment-Free Space</h4>
            <p>
              Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, 
              sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks, 
              inappropriate physical contact, and unwelcome sexual attention.
            </p>
          </div>

          <div className="col-4 col-medium-1">
            <div className="p-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
              <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>Quick Links</h4>
              <hr className="p-rule" />
              <ul className="p-list">
                <li><Link to="/about">About the Event</Link></li>
                <li><Link to="/tickets">Get Tickets</Link></li>
                <li><a href="https://docs.ubucon.asia/chat" target="_blank" rel="noopener noreferrer">Community Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Reporting & Incidents (Light Aubergine Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(119, 41, 83, 0.04)', borderTop: '1px solid rgba(119, 41, 83, 0.1)', borderBottom: '1px solid rgba(119, 41, 83, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--text-main)', fontWeight: 700 }}>Reporting Incidents</h3>
            <p>
              If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the conference staff immediately. 
              Conference staff will be wearing distinctive badges/shirts and can be reached at the registration desk. 
              All reports will be handled with strict confidentiality.
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: 'var(--bg-dark-alt)', borderColor: '#772953' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: '#fff' }}>Need Help?</h5>
                <p className="p-notification__message" style={{ color: '#E95420' }}>
                  You can contact the organizing team directly via email at <a href="mailto:coc@ubucon.in">coc@ubucon.in</a> or through our official conference chat channels.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: 'var(--bg-dark-alt)', height: '100%' }}>
              <h5>Strict Enforcement</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Organizers reserve the right to expel participants from the conference without refund for violating rules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CodeOfConduct;
