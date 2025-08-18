import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#partners", label: "Partners" },
    { href: "#signin", label: "Sign in" },
  ];

  return (
    <nav className="p-navigation" aria-label="Main navigation">
      <div className="p-navigation__row">
        <div className="p-navigation__banner">
          <div className="p-navigation__logo">
            <Link href="/">Ubuntu India</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="p-navigation__toggle--open"
            aria-label="Menu"
            aria-controls="main-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
        </div>

        {/* Navigation links */}
        <div
          id="main-navigation"
          className={`p-navigation__nav ${
            isMobileMenuOpen ? "is-open" : ""
          }`}
        >
          <ul className="p-navigation__items">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.href} className="p-navigation__item">
                <Link href={link.href} className="p-navigation__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
