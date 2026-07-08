"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`p-navigation ${mobileMenuOpen ? "has-menu-open" : ""}`}>
      <div className="p-navigation__row">
        <div className="p-navigation__banner">
          <div className="p-navigation__tagged-logo">
            <Link className="p-navigation__link" href="/">
              <div className="p-navigation__logo-tag">
                <Image
                  className="p-navigation__logo-icon"
                  src="/logos/ubuntu-in-logo.png"
                  alt="Ubuntu India"
                  width={28}
                  height={28}
                />
              </div>
              <span className="p-navigation__logo-title">Ubuntu India</span>
            </Link>
          </div>
          <ul className="p-navigation__items">
            <li className="p-navigation__item">
              <button
                className="p-navigation__link"
                aria-pressed={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? "Close menu" : "Menu"}
              </button>
            </li>
          </ul>
        </div>
        <nav className="p-navigation__nav">
          <ul className="p-navigation__items">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`p-navigation__item ${
                  pathname === link.href ? "is-selected" : ""
                }`}
              >
                <Link className="p-navigation__link" href={link.href}>
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
