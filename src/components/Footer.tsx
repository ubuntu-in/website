import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTelegram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer)', padding: '5rem 0 3rem 0', marginTop: 'auto', borderTop: '4px solid var(--vf-color-brand)' }}>
      <div className="row">
        <div className="col-3 col-medium-2" style={{ marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>About</h5>
          <ul className="p-list--clean" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                About UbuCon India
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/code-of-conduct" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Code of Conduct
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Venue & Travel</h5>
          <ul className="p-list--clean" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/venue" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Venue & Safety
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/travel-and-visas" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Travel & Visas
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/accommodations" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Accommodations
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Programs</h5>
          <ul className="p-list--clean" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/cfp" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Call for Proposals
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link to="/important-dates" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Important Dates
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-3 col-medium-2" style={{ marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Community</h5>
          <ul className="p-list--clean" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="https://blog.ubucon.asia/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                UbuCon Asia Blog
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="https://docs.ubucon.asia/chat/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Chat with Participants
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                Ubuntu Official Site
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr style={{ border: '0', borderTop: '1px solid var(--border-footer)', margin: '2.5rem 0 2rem 0' }} />
          <div className="footer-bottom-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <p className="u-no-margin--bottom" style={{ fontSize: '0.85rem', color: '#888888', lineHeight: '1.6' }}>
              © 2026 UbuCon India. Organized by the Ubuntu India Community. 
              <br />Ubuntu and Canonical are registered trademarks of Canonical Ltd.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <FaGithub style={{ fontSize: '1.25rem' }} /> GitHub
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e95420'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <FaTelegram style={{ fontSize: '1.25rem' }} /> Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
