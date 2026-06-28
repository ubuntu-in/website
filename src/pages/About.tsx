import React from 'react';
import { FaInfoCircle, FaTerminal, FaUsers, FaRocket } from 'react-icons/fa';

export const About: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--vf-color-accent)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Event Information
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              About UbuCon India 2026
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Connecting the local FOSS and Ubuntu communities in India.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaInfoCircle style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Section 1: Introduction (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-6">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>What is UbuCon India?</h3>
            <p className="p-text--lead">
              UbuCon India is a community-organized conference bringing together users, developers, enthusiasts, and contributors 
              of Ubuntu and Free & Open Source Software (FOSS) from across India.
            </p>
            <p>
              The event is organized completely by volunteers and features a variety of content including technical presentations, 
              workshops, and community discussions. Whether you are an industry veteran or a student, UbuCon India is the perfect place to learn and collaborate.
            </p>
          </div>
          <div className="col-6">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Why attend?</h3>
            <ul className="p-list">
              <li><strong>Learn:</strong> Attend talks and workshops from local and international open source experts.</li>
              <li><strong>Connect:</strong> Meet other developers, engineers, and open source enthusiasts from across India.</li>
              <li><strong>Share:</strong> Discuss your projects, gather feedback, and find new collaborators.</li>
              <li><strong>Contribute:</strong> Learn how you can get started contributing to Ubuntu, Debian, and upstream projects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Values (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(233, 84, 32, 0.04)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)', padding: '4rem 0' }}>
        <div className="row">
          <div className="col-12 u-align--center">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '2.5rem' }}>Our Values</h3>
          </div>
        </div>
        <div className="row">
          {/* Card 1: Advocacy */}
          <div className="col-6" style={{ marginBottom: '2rem' }}>
            <div className="p-card" style={{ height: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', borderTop: '4px solid var(--vf-color-brand)', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                  <FaTerminal style={{ fontSize: '1.35rem', color: 'var(--vf-color-brand)' }} />
                </div>
                <h4 className="p-card__title" style={{ margin: 0, color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '1.2rem' }}>Open Source Advocacy</h4>
              </div>
              <p className="p-card__content" style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                We advocate for the adoption of FOSS and the Linux operating system across educational institutions, public services, and businesses.
              </p>
            </div>
          </div>

          {/* Card 2: Community */}
          <div className="col-6" style={{ marginBottom: '2rem' }}>
            <div className="p-card" style={{ height: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', borderTop: '4px solid var(--vf-color-brand)', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                  <FaUsers style={{ fontSize: '1.35rem', color: 'var(--vf-color-brand)' }} />
                </div>
                <h4 className="p-card__title" style={{ margin: 0, color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '1.2rem' }}>Inclusive Community</h4>
              </div>
              <p className="p-card__content" style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                We believe in building a welcoming, inclusive, and harassment-free environment for everyone, guided by our Code of Conduct.
              </p>
            </div>
          </div>

          {/* Card 3: Empowerment */}
          <div className="col-6" style={{ marginBottom: '2rem' }}>
            <div className="p-card" style={{ height: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', borderTop: '4px solid var(--vf-color-brand)', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(233, 84, 32, 0.08)', flexShrink: 0 }}>
                  <FaRocket style={{ fontSize: '1.35rem', color: 'var(--vf-color-brand)' }} />
                </div>
                <h4 className="p-card__title" style={{ margin: 0, color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '1.2rem' }}>Empowerment</h4>
              </div>
              <p className="p-card__content" style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                We empower students, developers, and enthusiasts by providing them with a platform to speak, learn, and grow in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
