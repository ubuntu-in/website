import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const ProgramTabs: React.FC = () => {
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

        {/* Mobile Dropdown Nav */}
        <div className="u-hide--medium u-hide--large p-form u-no-margin--bottom" style={{ marginBottom: '1.5rem', width: '100%' }}>
          <select 
            className="p-select" 
            value={path} 
            onChange={(e) => navigate(e.target.value)}
            style={{ width: '100%', borderColor: 'var(--vf-color-brand)', fontWeight: 'bold' }}
            aria-label="Program sections navigation"
          >
            <option value="/cfp">Call for Proposals</option>
            <option value="/important-dates">Important Dates</option>
          </select>
        </div>
      </div>
    </section>
  );
};
export default ProgramTabs;
