import React from "react";
import { SponsorTabs } from "../components/SponsorTabs";
import { FaMedal } from "react-icons/fa";
import "../styles/Sponsors.scss";

// ─── Data ────────────────────────────────────────────────────────────────────

const TIERS = [
  {
    id: "gold",
    label: "Gold",
    featured: true,
    perks: [
      "Large booth in exhibition hall",
      "Keynote slot / presentation",
      "Logo on all promotional banners & badges",
      "3 free registration passes",
    ],
  },
  {
    id: "silver",
    label: "Silver",
    featured: false,
    perks: [
      "Standard booth in exhibition hall",
      "30-minute speaking session",
      "Logo on website & slide templates",
      "2 free registration passes",
    ],
  },
  {
    id: "bronze",
    label: "Bronze",
    featured: false,
    perks: [
      "Banner roll-up space in venue",
      "Logo on website & sponsor slides",
      "Social media announcement logo",
      "1 free registration pass",
    ],
  },
] as const;

const WHY_STATS = [
  { value: "500+", label: "Expected attendees" },
  { value: "3", label: "Days of sessions" },
  { value: "20+", label: "Speakers" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export const Sponsors: React.FC = () => (
  <main>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="sp-hero">
      <div className="row">
        <div className="col-12">
          <span className="sp-hero__eyebrow">Sponsors &amp; Partners</span>
          <h1 className="sp-hero__title">Become a Sponsor</h1>
          <p className="sp-hero__lead">
            Support the largest Ubuntu conference in India.
          </p>
        </div>
      </div>
    </section>

    {/* ── Tab Navigation ────────────────────────────────────────────────── */}
    <SponsorTabs />

    {/* ── Section 1: Why Sponsor ────────────────────────────────────────── */}
    <section className="p-strip sp-why-section">
      <div className="row">
        {/* Copy */}
        <div className="col-7 col-medium-12">
          <h3 className="sp-section__heading">
            Why Sponsor UbuCon India 2026?
          </h3>
          <p className="sp-why__lead">
            Sponsoring UbuCon India 2026 puts your brand in front of open-source
            developers, system engineers, IT decision-makers, and students from
            across India.
          </p>
          <p className="sp-why__body">
            Your sponsorship covers the venue, catering, recording equipment,
            speaker travel grants, and event materials — keeping tickets
            affordable for students and community members alike.
          </p>
        </div>

        {/* Stats sidebar */}
        <div className="col-5 col-medium-12">
          <aside className="sp-stats">
            {WHY_STATS.map(({ value, label }) => (
              <div key={label} className="sp-stats__item">
                <span className="sp-stats__value">{value}</span>
                <span className="sp-stats__label">{label}</span>
              </div>
            ))}
            <p className="sp-stats__footer">
              Gain visibility among regional Linux leaders, educators, and
              enterprise system administrators.
            </p>
          </aside>
        </div>
      </div>
    </section>

    {/* ── Section 2: Sponsorship Tiers ──────────────────────────────────── */}
    <section className="sp-tiers-section">
      <div className="row">
        <div className="col-12">
          <h3 className="sp-section__heading u-align--center">
            Sponsorship Packages
          </h3>
          <p className="sp-tiers__subhead u-align--center">
            Choose the tier that fits your goals — or reach out for a custom
            package.
          </p>
        </div>
      </div>

      <div className="row sp-tiers__grid">
        {TIERS.map(({ id, label, featured, perks }) => (
          <div key={id} className={`col-4 col-medium-12`}>
            <div
              className={`sp-tier-card sp-tier-card--${id}${featured ? " sp-tier-card--featured" : ""}`}
            >
              {featured && (
                <span className="sp-tier-card__recommended">Recommended</span>
              )}
              <div className="sp-tier-card__header">
                <FaMedal className="sp-tier-card__medal" aria-hidden="true" />
                <h4 className="sp-tier-card__title">{label}</h4>
              </div>
              <hr className="p-rule sp-tier-card__rule" />
              <ul className="sp-tier-card__perks">
                {perks.map((perk) => (
                  <li key={perk} className="sp-tier-card__perk">
                    <span className="sp-tier-card__check" aria-hidden="true">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── Section 3: Specialized + Contact ─────────────────────────────── */}
    <section className="sp-specialized-section">
      <div className="row">
        {/* Info + notice */}
        <div className="col-8 col-medium-12">
          <h3 className="sp-section__heading">Specialized Sponsorships</h3>
          <p className="sp-specialized__body">
            We also offer targeted options — sponsor the social dinner, coffee
            breaks, or student travel grants. These packages offer focused
            exposure to specific audiences and can be shaped around your
            marketing goals.
          </p>

          <div className="sp-notice">
            <h5 className="sp-notice__heading">Get in Touch</h5>
            <p className="sp-notice__body">
              Interested in sponsoring or want a custom package? Email us at{" "}
              <a href="mailto:sponsors@ubucon.in" className="sp-notice__link">
                sponsors@ubucon.in
              </a>{" "}
              to receive our complete sponsorship prospectus.
            </p>
          </div>
        </div>

        {/* Custom packages sidebar */}
        <div className="col-4 col-medium-12">
          <aside className="sp-custom">
            <h5 className="sp-custom__heading">Custom Packages</h5>
            <p className="sp-custom__body">
              We work closely with partners to build sponsorships that align
              perfectly with your marketing goals.
            </p>
          </aside>
        </div>
      </div>
    </section>
  </main>
);

export default Sponsors;
