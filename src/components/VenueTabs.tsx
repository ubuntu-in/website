import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const VenueTabs: React.FC = () => {
  const location = useLocation();
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
        <nav className="p-tabs">
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
      </div>
    </section>
  );
};
export default VenueTabs;
