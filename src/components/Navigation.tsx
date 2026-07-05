import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTicketAlt } from 'react-icons/fa';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdownId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isParentActive = (type: 'about' | 'venue' | 'programs' | 'sponsors') => {
    if (type === 'about') return currentPath === '/about' || currentPath === '/code-of-conduct';
    if (type === 'venue') return currentPath === '/venue' || currentPath === '/travel-and-visas' || currentPath === '/accommodations';
    if (type === 'programs') return currentPath === '/cfp' || currentPath === '/important-dates';
    if (type === 'sponsors') return currentPath === '/sponsors' || currentPath === '/our-sponsors';
    return false;
  };

  return (
    <header id="navigation" className={`p-navigation is-dark ${mobileMenuOpen ? 'has-menu-open' : ''}`} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="p-navigation__row--25-75">
        <div className="p-navigation__banner">
          <div className="p-navigation__tagged-logo">
            <Link className="p-navigation__link" to="/" onClick={handleNavClick}>
              <div className="p-navigation__logo-tag">
                <img className="p-navigation__logo-icon" src="/ubuntu-logo-white.svg" alt="Ubuntu Logo" />
              </div>
              <span className="p-navigation__logo-title" style={{ fontWeight: 700 }}>UbuCon India 2026</span>
            </Link>
          </div>
          {!mobileMenuOpen ? (
            <a
              href="#navigation"
              className="p-navigation__toggle--open"
              title="menu"
              onClick={(e) => { e.preventDefault(); toggleMobileMenu(); }}
            >
              <i className="p-icon--menu"></i>
            </a>
          ) : (
            <a
              href="#navigation-closed"
              className="p-navigation__toggle--close"
              title="close menu"
              onClick={(e) => { e.preventDefault(); toggleMobileMenu(); }}
              style={{ display: 'block' }}
            >
              <i className="p-icon--close"></i>
            </a>
          )}
        </div>

        <nav className="p-navigation__nav" aria-label="Navigation">
          <ul className="p-navigation__items">
            {/* About Dropdown */}
            <li className={`p-navigation__item--dropdown-toggle ${activeDropdown === 'about' ? 'is-active' : ''}`}>
              <a
                href="#about-menu"
                aria-controls="about-menu"
                className={`p-navigation__link ${isParentActive('about') ? 'is-active' : ''}`}
                onClick={(e) => toggleDropdown('about', e)}
              >
                About
              </a>
              <ul className="p-navigation__dropdown" id="about-menu" aria-hidden={activeDropdown !== 'about'}>
                <li>
                  <Link 
                    to="/about" 
                    className={`p-navigation__dropdown-item ${currentPath === '/about' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    About the Event
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/code-of-conduct" 
                    className={`p-navigation__dropdown-item ${currentPath === '/code-of-conduct' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </li>

            {/* Venue Dropdown */}
            <li className={`p-navigation__item--dropdown-toggle ${activeDropdown === 'venue' ? 'is-active' : ''}`}>
              <a
                href="#venue-menu"
                aria-controls="venue-menu"
                className={`p-navigation__link ${isParentActive('venue') ? 'is-active' : ''}`}
                onClick={(e) => toggleDropdown('venue', e)}
              >
                Venue & Travel
              </a>
              <ul className="p-navigation__dropdown" id="venue-menu" aria-hidden={activeDropdown !== 'venue'}>
                <li>
                  <Link 
                    to="/venue" 
                    className={`p-navigation__dropdown-item ${currentPath === '/venue' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Venue & Safety
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/travel-and-visas" 
                    className={`p-navigation__dropdown-item ${currentPath === '/travel-and-visas' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Travel & Visas
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/accommodations" 
                    className={`p-navigation__dropdown-item ${currentPath === '/accommodations' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Accommodations
                  </Link>
                </li>
              </ul>
            </li>

            {/* Programs Dropdown */}
            <li className={`p-navigation__item--dropdown-toggle ${activeDropdown === 'programs' ? 'is-active' : ''}`}>
              <a
                href="#programs-menu"
                aria-controls="programs-menu"
                className={`p-navigation__link ${isParentActive('programs') ? 'is-active' : ''}`}
                onClick={(e) => toggleDropdown('programs', e)}
              >
                Programs
              </a>
              <ul className="p-navigation__dropdown" id="programs-menu" aria-hidden={activeDropdown !== 'programs'}>
                <li>
                  <Link 
                    to="/cfp" 
                    className={`p-navigation__dropdown-item ${currentPath === '/cfp' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Call for Proposals
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/important-dates" 
                    className={`p-navigation__dropdown-item ${currentPath === '/important-dates' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Important Dates
                  </Link>
                </li>
              </ul>
            </li>

            {/* Sponsors Dropdown */}
            <li className={`p-navigation__item--dropdown-toggle ${activeDropdown === 'sponsors' ? 'is-active' : ''}`}>
              <a
                href="#sponsors-menu"
                aria-controls="sponsors-menu"
                className={`p-navigation__link ${isParentActive('sponsors') ? 'is-active' : ''}`}
                onClick={(e) => toggleDropdown('sponsors', e)}
              >
                Sponsors
              </a>
              <ul className="p-navigation__dropdown" id="sponsors-menu" aria-hidden={activeDropdown !== 'sponsors'}>
                <li>
                  <Link 
                    to="/sponsors" 
                    className={`p-navigation__dropdown-item ${currentPath === '/sponsors' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Become a Sponsor
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-sponsors" 
                    className={`p-navigation__dropdown-item ${currentPath === '/our-sponsors' ? 'is-active' : ''}`} 
                    onClick={handleNavClick}
                  >
                    Our Sponsors
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="p-navigation__items">
            <li className="p-navigation__item">
              <Link
                className={`p-navigation__link ${currentPath === '/tickets' ? 'is-active' : ''}`}
                to="/tickets"
                onClick={handleNavClick}
                title="Tickets"
                style={{ fontWeight: 700 }}
              >
                <FaTicketAlt style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
