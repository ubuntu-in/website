import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const SponsorTabs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const getStyle = (tabPath: string) => {
    const isActive = path === tabPath;
    return {
      display: 'block',
      padding: '0.75rem 0',
      fontWeight: isActive ? 'bold' : 'normal',
      borderBottom: isActive ? '3px solid var(--vf-color-brand)' : 'none',
      color: isActive ? 'var(--vf-color-brand)' : '#999',
      textDecoration: 'none'
    };
  };

  return (
    <section className="p-strip--shallow u-no-padding--bottom">
      <div className="row">
        {/* Desktop Tabs */}
        <nav className="p-tabs u-hide--small">
          <ul className="p-tabs__list" style={{ borderBottom: '1px solid var(--border-main)', display: 'flex', gap: '2rem', paddingLeft: 0 }}>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/sponsors" className="p-tabs__link" style={getStyle('/sponsors')}>
                Become a Sponsor
              </Link>
            </li>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/our-sponsors" className="p-tabs__link" style={getStyle('/our-sponsors')}>
                Our Sponsors
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Dropdown Nav */}
        <div className="u-hide--medium u-hide--large p-form u-no-margin--bottom" style={{ marginBottom: '1.5rem', width: '100%' }}>
          <select 
            className="p-select" 
            value={path} 
            onChange={(e) => navigate(e.target.value)}
            style={{ width: '100%', borderColor: 'var(--vf-color-brand)', fontWeight: 'bold' }}
            aria-label="Sponsor sections navigation"
          >
            <option value="/sponsors">Become a Sponsor</option>
            <option value="/our-sponsors">Our Sponsors</option>
          </select>
        </div>
      </div>
    </section>
  );
};
export default SponsorTabs;
