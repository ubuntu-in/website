import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ProgramTabs: React.FC = () => {
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
              <Link to="/cfp" className="p-tabs__link" style={getStyle('/cfp')}>
                Call for Proposals
              </Link>
            </li>
            <li className="p-tabs__item" style={{ listStyle: 'none' }}>
              <Link to="/important-dates" className="p-tabs__link" style={getStyle('/important-dates')}>
                Important Dates
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default ProgramTabs;
