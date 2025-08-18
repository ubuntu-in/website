"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="navigation" className="p-navigation is-dark" role="banner">
      <div className="p-navigation__row--25-75">
        {/* Banner with logo + toggles */}
        <div className="p-navigation__banner">
          <div className="p-navigation__tagged-logo">
            <Link href="/" className="p-navigation__link">
              <div className="p-navigation__logo-tag">
                <Image
                  src="/icons/logo.png"
                  alt="Ubuntu India Logo"
                  width={32}
                  height={32}
                  className="p-navigation__logo-icon"
                />
              </div>
              <span className="p-navigation__logo-title">Ubuntu India</span>
            </Link>
          </div>

          {/* Right-side controls: search + menu */}
          <ul className="p-navigation__items">
            <li className="p-navigation__item">
              <button
                className="js-menu-button p-navigation__link"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Menu
              </button>
            </li>
          </ul>
        </div>

        {/* Main nav */}
        <nav className="p-navigation__nav" aria-label="Main navigation">
          <ul className="p-navigation__items">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`p-navigation__item ${
                  pathname === link.href ? "is-selected" : ""
                }`}
              >
                <Link
                  href={link.href}
                  className="p-navigation__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
