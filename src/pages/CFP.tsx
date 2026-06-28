import React from 'react';
import { ProgramTabs } from '../components/ProgramTabs';
import { FaLaptopCode, FaServer, FaUsers, FaAtom } from 'react-icons/fa';

export const CFP: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--vf-color-accent)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Program & Schedule
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Call for Proposals
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Share your knowledge with the Indian Ubuntu community.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaLaptopCode style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <ProgramTabs />

      {/* Section 1: CFP Tracks (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1.5rem' }}>Call for Proposals (CFP)</h3>
            <p className="p-text--lead">
              UbuCon India 2026 is inviting developers, designers, sysadmins, open-source advocates, and students to submit session proposals! 
              Whether you want to present a technical deep-dive, demonstrate a tool, or host a workshop, we want to hear from you.
            </p>

            <h4 style={{ marginTop: '2.5rem', marginBottom: '1.5rem', color: 'var(--vf-color-brand)', fontWeight: 700 }}>Suggested Tracks</h4>
            <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="p-card u-no-margin" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', borderTop: '4px solid var(--vf-color-brand)', backgroundColor: '#fcfcfc', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                    <FaLaptopCode style={{ fontSize: '1.15rem', color: 'var(--vf-color-brand)' }} />
                  </div>
                  <h5 className="p-card__title" style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: 'var(--vf-color-accent)' }}>Desktop & Core</h5>
                </div>
                <p className="p-card__content" style={{ fontSize: '0.875rem', marginBottom: 0, color: '#555', lineHeight: '1.5' }}>Packaging (Snaps, Debian), Desktop developments, custom flavors, and window managers.</p>
              </div>
              
              <div className="p-card u-no-margin" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', borderTop: '4px solid var(--vf-color-brand)', backgroundColor: '#fcfcfc', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                    <FaServer style={{ fontSize: '1.15rem', color: 'var(--vf-color-brand)' }} />
                  </div>
                  <h5 className="p-card__title" style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: 'var(--vf-color-accent)' }}>Cloud & Server</h5>
                </div>
                <p className="p-card__content" style={{ fontSize: '0.875rem', marginBottom: 0, color: '#555', lineHeight: '1.5' }}>Kubernetes, OpenStack, Server management, containerization (LXD/LXC), and cloud deployments.</p>
              </div>

              <div className="p-card u-no-margin" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', borderTop: '4px solid var(--vf-color-brand)', backgroundColor: '#fcfcfc', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                    <FaUsers style={{ fontSize: '1.15rem', color: 'var(--vf-color-brand)' }} />
                  </div>
                  <h5 className="p-card__title" style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: 'var(--vf-color-accent)' }}>FOSS Advocacy</h5>
                </div>
                <p className="p-card__content" style={{ fontSize: '0.875rem', marginBottom: 0, color: '#555', lineHeight: '1.5' }}>Community building, localization, diversity in tech, licensing, and open-source models.</p>
              </div>

              <div className="p-card u-no-margin" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', borderTop: '4px solid var(--vf-color-brand)', backgroundColor: '#fcfcfc', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                    <FaAtom style={{ fontSize: '1.15rem', color: 'var(--vf-color-brand)' }} />
                  </div>
                  <h5 className="p-card__title" style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: 'var(--vf-color-accent)' }}>Emerging Tech</h5>
                </div>
                <p className="p-card__content" style={{ fontSize: '0.875rem', marginBottom: 0, color: '#555', lineHeight: '1.5' }}>Internet of Things (IoT), AI/Machine Learning, Robotics (ROS), and security audits on Ubuntu.</p>
              </div>
            </div>
          </div>

          <div className="col-4 col-medium-1">
            <div className="p-card" style={{ backgroundColor: '#fcfcfc' }}>
              <h4 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Speaker Benefits</h4>
              <hr className="p-rule" />
              <ul className="p-list">
                <li>Free access to the conference</li>
                <li>Exclusive speaker dinner invitation</li>
                <li>Speaker gift pack</li>
                <li>Priority support for travel grant queries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Session Formats & Submission (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1.5rem' }}>Session Formats</h3>
            <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="p-card u-no-margin" style={{ borderLeft: '4px solid var(--vf-color-brand)', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--vf-color-accent)' }}>Standard Talk</strong>
                <span className="p-status-label--positive" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>30 mins</span>
                <p className="p-card__content" style={{ fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: '1.5' }}>Deep-dive presentation followed by a short Q&A session.</p>
              </div>
              <div className="p-card u-no-margin" style={{ borderLeft: '4px solid var(--vf-color-brand)', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--vf-color-accent)' }}>Workshop</strong>
                <span className="p-status-label--positive" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>90 mins</span>
                <p className="p-card__content" style={{ fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: '1.5' }}>Practical, hands-on tutorials. Attendees bring their own laptops.</p>
              </div>
              <div className="p-card u-no-margin" style={{ borderLeft: '4px solid var(--vf-color-brand)', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--vf-color-accent)' }}>Lightning Talk</strong>
                <span className="p-status-label--positive" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>10 mins</span>
                <p className="p-card__content" style={{ fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: '1.5' }}>Short, high-energy sessions showcasing a quick project, tip or idea.</p>
              </div>
            </div>

            <div className="p-notification--information" style={{ marginTop: '2rem', backgroundColor: '#ffffff' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: 'var(--vf-color-accent)' }}>How to Submit</h5>
                <p className="p-notification__message">
                  The CFP portal will officially open on <strong>July 1, 2026</strong>. 
                  We will update this page with a link to our submission portal (Indico) as soon as it goes live. Keep an eye on our timeline!
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5>Important Dates</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                CFP Opens: July 1, 2026
                <br />CFP Closes: Sept 15, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CFP;
