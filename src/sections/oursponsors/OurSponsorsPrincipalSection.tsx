import React from 'react';

const PRINCIPAL_SPONSORS = [
  { name: "Canonical", logo: "https://logo.clearbit.com/canonical.com" },
] as const;

export const OurSponsorsPrincipalSection: React.FC = () => {
  return (
    <section className="p-strip os-principal-section">
      <div className="os-tier-header u-align--center">
        <span className="os-tier-header__label os-tier-header__label--principal">
          Principal Sponsor
        </span>
        <h3 className="os-tier-header__heading">Powering UbuCon India</h3>
        <p className="os-tier-header__sub">
          We are incredibly grateful for the leadership and support of our
          Principal Sponsor in making UbuCon India a reality.
        </p>
      </div>
      <div className="os-tier-container">
        <div className="os-logos-principal">
          {PRINCIPAL_SPONSORS.map(({ name, logo }) => (
            <div key={name} className="os-logo-card os-logo-card--lg">
              <img src={logo} alt={name} className="os-logo-card__img" />
              <span className="os-logo-card__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

