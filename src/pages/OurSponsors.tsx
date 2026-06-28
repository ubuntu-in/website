import React from "react";
import { SponsorTabs } from "../components/SponsorTabs";
import "../styles/OurSponsors.scss";

// ─── Data ────────────────────────────────────────────────────────────────────

const PRINCIPAL_SPONSORS = [
  { name: "Canonical", logo: "https://logo.clearbit.com/canonical.com" },
] as const;

const GOLD_SPONSORS = [
  { name: "Debian", logo: "https://logo.clearbit.com/debian.org" },
  { name: "GNOME", logo: "https://logo.clearbit.com/gnome.org" },
  { name: "GitHub", logo: "https://logo.clearbit.com/github.com" },
] as const;

// ─── Sub-components ──────────────────────────────────────────────────────────

interface SponsorLogoProps {
  name: string;
  logo: string;
  size?: "lg" | "md";
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({
  name,
  logo,
  size = "md",
}) => (
  <div className={`os-logo-card os-logo-card--${size}`}>
    <img src={logo} alt={name} className="os-logo-card__img" />
    <span className="os-logo-card__name">{name}</span>
  </div>
);

// ─── Component ───────────────────────────────────────────────────────────────

export const OurSponsors: React.FC = () => (
  <main>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="os-hero">
      <div className="row">
        <div className="col-12">
          <span className="os-hero__eyebrow">Sponsors &amp; Partners</span>
          <h1 className="os-hero__title">Our Sponsors</h1>
          <p className="os-hero__lead">
            Acknowledging the organizations that make UbuCon India 2026
            possible.
          </p>
        </div>
      </div>
    </section>

    {/* ── Tab Navigation ────────────────────────────────────────────────── */}
    <SponsorTabs />

    {/* ── Section 1: Principal Sponsor ──────────────────────────────────── */}
    <section className="p-strip os-principal-section">
      <div className="row">
        <div className="col-12">
          <div className="os-tier-header">
            <span className="os-tier-header__label os-tier-header__label--principal">
              Principal Sponsor
            </span>
            <h3 className="os-tier-header__heading">Powering UbuCon India</h3>
            <p className="os-tier-header__sub">
              We are incredibly grateful for the leadership and support of our
              Principal Sponsor in making UbuCon India a reality.
            </p>
          </div>

          <div className="os-logos os-logos--principal">
            {PRINCIPAL_SPONSORS.map(({ name, logo }) => (
              <SponsorLogo key={name} name={name} logo={logo} size="lg" />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Section 2: Gold Sponsors ──────────────────────────────────────── */}
    <section className="os-gold-section">
      <div className="row">
        <div className="col-12">
          <div className="os-tier-header">
            <span className="os-tier-header__label os-tier-header__label--gold">
              Gold Sponsors
            </span>
            <h3 className="os-tier-header__heading">Fuelling the Community</h3>
            <p className="os-tier-header__sub">
              Our Gold sponsors contribute significantly to venue operations,
              speaker support, and community travel grants.
            </p>
          </div>

          <div className="os-logos os-logos--gold">
            {GOLD_SPONSORS.map(({ name, logo }) => (
              <SponsorLogo key={name} name={name} logo={logo} size="md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default OurSponsors;
