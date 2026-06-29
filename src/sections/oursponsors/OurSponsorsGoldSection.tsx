import React from 'react';

const GOLD_SPONSORS = [
  { name: "Debian", logo: "https://logo.clearbit.com/debian.org" },
  { name: "GNOME", logo: "https://logo.clearbit.com/gnome.org" },
  { name: "GitHub", logo: "https://logo.clearbit.com/github.com" },
  { name: "GitLab", logo: "https://logo.clearbit.com/gitlab.com" },
  { name: "DigitalOcean", logo: "https://logo.clearbit.com/digitalocean.com" },
  { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
] as const;

export const OurSponsorsGoldSection: React.FC = () => {
  return (
    <section className="p-strip os-gold-section">
      <div className="row">
        <div className="col-12">
          <div className="os-tier-header u-align--center">
            <span className="os-tier-header__label os-tier-header__label--gold">
              Gold Sponsors
            </span>
            <h3 className="os-tier-header__heading">Fuelling the Community</h3>
            <p className="os-tier-header__sub">
              Our Gold sponsors contribute significantly to venue operations,
              speaker support, and community travel grants.
            </p>
          </div>
        </div>
      </div>
      <div className="row os-tier-container">
        <div className="os-logos-grid">
          {GOLD_SPONSORS.map(({ name, logo }) => (
            <div key={name} className="os-logo-card os-logo-card--md">
              <img src={logo} alt={name} className="os-logo-card__img" />
              <span className="os-logo-card__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
