import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="p-strip" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '4rem 0' }}>
        <div className="row u-vertically-center" style={{ width: '100%' }}>
          <div className="col-7 col-medium-4">
            <span className="p-status-label--positive" style={{ marginBottom: '1.25rem', display: 'inline-block', backgroundColor: 'var(--vf-color-brand)', color: 'white', borderColor: 'var(--vf-color-brand)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem' }}>
              Registration Open
            </span>
            <h1 className="p-hero__title" style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1rem', fontSize: '3.5rem', lineHeight: '1.1' }}>
              UbuCon India 2026
            </h1>
            
            <div style={{ marginBottom: '2rem' }}>
              <ul className="p-inline-list" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#444', fontWeight: 600, fontSize: '0.95rem' }}>
                  <FaCalendarAlt style={{ color: 'var(--vf-color-brand)', fontSize: '1.1rem' }} />
                  <span>November 14-15, 2026</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#444', fontWeight: 600, fontSize: '0.95rem' }}>
                  <FaMapMarkerAlt style={{ color: 'var(--vf-color-brand)', fontSize: '1.1rem' }} />
                  <span>DAIC, New Delhi</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#444', fontWeight: 600, fontSize: '0.95rem' }}>
                  <FaTicketAlt style={{ color: 'var(--vf-color-brand)', fontSize: '1.1rem' }} />
                  <span>Free Registration</span>
                </li>
              </ul>
            </div>

            <p className="p-text--lead" style={{ marginBottom: '2.5rem', color: '#333333', fontSize: '1.15rem', lineHeight: '1.6' }}>
              UbuCon India is the premier community-organized conference for Ubuntu and FOSS enthusiasts in India. 
              Join developers, designers, system administrators, and contributors from across the country for two days of learning, hacking, and networking.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/tickets')}>
                Register Now
              </button>
              <button className="btn-secondary" onClick={() => navigate('/cfp')}>
                Submit Proposal
              </button>
            </div>
          </div>
          <div className="col-5 col-medium-2 u-align--center">
            <img 
              src="/logo.png" 
              alt="UbuCon India Logo" 
              style={{ maxWidth: '85%', maxHeight: '280px', objectFit: 'contain', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 15px 30px rgba(233, 84, 32, 0.12))' }} 
            />
          </div>
        </div>
      </section>

      {/* Countdown and Overview Section */}
      <section className="p-strip">
        <div className="row">
          <div className="col-6 col-medium-3">
            <Countdown />
          </div>
          <div className="col-6 col-medium-3 u-vertically-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>An event for everyone with FOSS and Ubuntu in common</h3>
            <p>
              UbuCon India connects open source developers, creators, researchers, entrepreneurs, and contributors. 
              Whether you are an industry veteran or just beginning your journey, there is something for everyone.
            </p>
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              Learn more about UbuCon India
            </button>
          </div>
        </div>
      </section>

      {/* Video / Aftermovie Section */}
      <section className="p-strip--light">
        <div className="row--50-50">
          <div className="col">
            <h2 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Experience the Community Spirit</h2>
            <p>
              UbuCon is not just about technology—it is about the community. Watch the recap of the global 
              UbuCon events to see the energy, camaraderie, and collaboration that you will experience in New Delhi this November!
            </p>
            <p className="u-text--muted">
              Get ready for inspiring keynotes, hands-on workshops, lightning talks, and the famous social event where you can connect with speakers and fellow participants.
            </p>
          </div>
          <div className="col u-align--center">
            <div className="p-card u-no-padding" style={{ overflow: 'hidden', borderRadius: '4px' }}>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/Ul8DQh3yroo?si=RQT0Jqq8-bX4yU6-" 
                title="UbuCon Aftermovie" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Lineup */}
      <section className="p-strip--light">
        <div className="row">
          <h2 className="u-align--center" style={{ color: 'var(--vf-color-accent)' }}>Featured Speakers</h2>
          <hr className="p-rule" />
        </div>
        <div className="row">
          <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
            <div className="p-card u-align--center" style={{ height: '100%', padding: '2rem 1rem' }}>
              <img 
                src="https://ui-avatars.com/api/?name=Amit+Sharma&background=772953&color=fff&size=120&bold=true" 
                alt="Dr. Amit Sharma" 
                style={{ width: '96px', height: '96px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', border: '3px solid #eaeaea' }}
              />
              <h4 className="p-card__title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Dr. Amit Sharma</h4>
              <p className="u-text--muted" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Cloud Architect</p>
              <p className="p-card__content" style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>Specialist in deploying scalable enterprise Kubernetes workloads on Ubuntu Server.</p>
            </div>
          </div>

          <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
            <div className="p-card u-align--center" style={{ height: '100%', padding: '2rem 1rem' }}>
              <img 
                src="https://ui-avatars.com/api/?name=Priya+Patel&background=e95420&color=fff&size=120&bold=true" 
                alt="Priya Patel" 
                style={{ width: '96px', height: '96px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', border: '3px solid #eaeaea' }}
              />
              <h4 className="p-card__title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Priya Patel</h4>
              <p className="u-text--muted" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ubuntu Desktop Eng</p>
              <p className="p-card__content" style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>Contributing to desktop packaging, Snaps development, and custom flavors.</p>
            </div>
          </div>

          <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
            <div className="p-card u-align--center" style={{ height: '100%', padding: '2rem 1rem' }}>
              <img 
                src="https://ui-avatars.com/api/?name=Rajesh+Kumar&background=333333&color=fff&size=120&bold=true" 
                alt="Rajesh Kumar" 
                style={{ width: '96px', height: '96px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', border: '3px solid #eaeaea' }}
              />
              <h4 className="p-card__title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Rajesh Kumar</h4>
              <p className="u-text--muted" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>FOSS Advocate</p>
              <p className="p-card__content" style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>Advocating for digital sovereignty and localization initiatives across public services.</p>
            </div>
          </div>

          <div className="col-3 col-medium-2" style={{ marginBottom: '1.5rem' }}>
            <div className="p-card u-align--center" style={{ height: '100%', padding: '2rem 1rem' }}>
              <img 
                src="https://ui-avatars.com/api/?name=Ananya+Rao&background=e95420&color=fff&size=120&bold=true" 
                alt="Ananya Rao" 
                style={{ width: '96px', height: '96px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', border: '3px solid #eaeaea' }}
              />
              <h4 className="p-card__title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Ananya Rao</h4>
              <p className="u-text--muted" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Kernel Developer</p>
              <p className="p-card__content" style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>Debugging system architectures, device drivers, and security modules on Linux kernels.</p>
            </div>
          </div>
        </div>
        <div className="row u-align--center" style={{ marginTop: '2rem' }}>
          <button className="btn-secondary" onClick={() => navigate('/cfp')}>
            Submit your proposal to speak
          </button>
        </div>
      </section>

      {/* Sponsors Highlight */}
      <section className="p-strip--light" style={{ paddingBottom: '4rem' }}>
        <div className="row">
          <h2 className="u-align--center" style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '2.5rem' }}>Sponsors & Partners</h2>
        </div>

        {/* Tier 1: Principal Sponsor */}
        <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
          <h4 style={{ color: 'var(--vf-color-brand)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>
            Principal Sponsor
          </h4>
          <div className="col-4 col-medium-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '280px', height: '110px', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <img 
                src="https://logo.clearbit.com/canonical.com" 
                alt="Canonical" 
                style={{ maxHeight: '48px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
              />
            </div>
          </div>
        </div>

        {/* Tier 2: Gold Sponsors */}
        <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '1.25rem', textAlign: 'center' }}>
            Gold Sponsors & Partners
          </h4>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '800px' }}>
            <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '220px', height: '90px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <img 
                src="https://logo.clearbit.com/debian.org" 
                alt="Debian" 
                style={{ maxHeight: '38px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
              />
            </div>
            <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '220px', height: '90px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <img 
                src="https://logo.clearbit.com/gnome.org" 
                alt="GNOME" 
                style={{ maxHeight: '38px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
              />
            </div>
            <div className="p-card u-align--center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '220px', height: '90px', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <img 
                src="https://logo.clearbit.com/github.com" 
                alt="GitHub" 
                style={{ maxHeight: '38px', maxWidth: '85%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.2s ease' }} 
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }} 
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }} 
              />
            </div>
          </div>
        </div>

        <div className="row u-align--center" style={{ marginTop: '3.5rem' }}>
          <button className="btn-secondary" onClick={() => navigate('/sponsors')}>
            Become a Sponsor
          </button>
        </div>
      </section>
    </main>
  );
};
export default Home;
