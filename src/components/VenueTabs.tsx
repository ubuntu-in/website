import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const VenueTabs: React.FC = () => {
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
      color: isActive ? 'var(--vf-color-brand)' : '#666',
      textDecoration: 'none'
    };
  };

  return (
    <section className="p-strip--shallow u-no-padding--bottom">
      <div className="row">
        {/* Desktop Tabs */}
        <nav className="p-tabs u-hide--small">
          <ul className="p-tabs__list" style={{ borderBottom: '1px solid #d9d9d9', display: 'flex', gap: '2rem', paddingLeft: 0 }}>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/venue" className="p-tabs__link" style={getStyle('/venue')}>
                Venue & Safety
              </Link>
            </li>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/travel-and-visas" className="p-tabs__link" style={getStyle('/travel-and-visas')}>
                Travel & Visas
              </Link>
            </li>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/accommodations" className="p-tabs__link" style={getStyle('/accommodations')}>
                Accommodations
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
            aria-label="Venue sections navigation"
          >
            <option value="/venue">Venue & Safety</option>
            <option value="/travel-and-visas">Travel & Visas</option>
            <option value="/accommodations">Accommodations</option>
          </select>
        </div>
      </div>
    </section>
  );
};
export default VenueTabs;
