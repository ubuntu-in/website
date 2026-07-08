import React from "react";
import { ProgramTabs } from "../components/ProgramTabs";
import { FaLaptopCode, FaServer, FaUsers, FaAtom } from "react-icons/fa";
import "../styles/CFP.scss";

// ─── Data ────────────────────────────────────────────────────────────────────

const TRACKS = [
  {
    Icon: FaLaptopCode,
    title: "Desktop & Core",
    body: "Packaging (Snaps, Debian), Desktop developments, custom flavors, and window managers.",
  },
  {
    Icon: FaServer,
    title: "Cloud & Server",
    body: "Kubernetes, OpenStack, Server management, containerization (LXD/LXC), and cloud deployments.",
  },
  {
    Icon: FaUsers,
    title: "FOSS Advocacy",
    body: "Community building, localization, diversity in tech, licensing, and open-source models.",
  },
  {
    Icon: FaAtom,
    title: "Emerging Tech",
    body: "Internet of Things (IoT), AI/Machine Learning, Robotics (ROS), and security audits on Ubuntu.",
  },
] as const;

const SPEAKER_BENEFITS = [
  "Free access to the conference",
  "Exclusive speaker dinner invitation",
  "Speaker gift pack",
  "Priority support for travel grant queries",
] as const;

const SESSION_FORMATS = [
  {
    title: "Standard Talk",
    duration: "30 mins",
    body: "Deep-dive presentation followed by a short Q&A session.",
  },
  {
    title: "Workshop",
    duration: "90 mins",
    body: "Practical, hands-on tutorials. Attendees bring their own laptops.",
  },
  {
    title: "Lightning Talk",
    duration: "10 mins",
    body: "Short, high-energy sessions showcasing a quick project, tip, or idea.",
  },
] as const;

const IMPORTANT_DATES = [
  { label: "CFP Opens", date: "July 1, 2026" },
  { label: "CFP Closes", date: "Sept 15, 2026" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export const CFP: React.FC = () => (
  <main>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="cfp-hero">
      <div className="row">
        <div className="col-12">
          <span className="cfp-hero__eyebrow">Program &amp; Schedule</span>
          <h1 className="cfp-hero__title">Call for Proposals</h1>
          <p className="cfp-hero__lead">
            Share your knowledge with the Indian Ubuntu community.
          </p>
        </div>
      </div>
    </section>

    {/* ── Tab Navigation ────────────────────────────────────────────────── */}
    <ProgramTabs />

    {/* ── Section 1: Tracks + Speaker Benefits ─────────────────────────── */}
    <section className="p-strip cfp-tracks-section">
      <div className="row">
        {/* Intro — full width */}
        <div className="col-12">
          <h3 className="cfp-section__heading">Call for Proposals (CFP)</h3>
          <p className="cfp-section__intro">
            UbuCon India 2026 is inviting developers, designers, sysadmins,
            open-source advocates, and students to submit session proposals!
            Whether you want to present a technical deep-dive, demonstrate a
            tool, or host a workshop, we want to hear from you.
          </p>
        </div>

        {/* Tracks grid */}
        <div className="col-8 col-medium-6">
          <h4 className="cfp-tracks__subheading">Suggested Tracks</h4>

          <div className="cfp-tracks__grid">
            {TRACKS.map(({ Icon, title, body }) => (
              <div key={title} className="cfp-track-card">
                <div className="cfp-track-card__header">
                  <div className="cfp-track-card__icon-wrap">
                    <Icon className="cfp-track-card__icon" />
                  </div>
                  <strong className="cfp-track-card__title">{title}</strong>
                </div>
                <p className="cfp-track-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Speaker Benefits sidebar */}
        <div className="col-4 col-medium-6">
          <aside className="cfp-benefits">
            <h4 className="cfp-benefits__heading">Speaker Benefits</h4>
            <hr className="p-rule cfp-benefits__rule" />
            <ul className="cfp-benefits__list">
              {SPEAKER_BENEFITS.map((item) => (
                <li key={item} className="cfp-benefits__item">
                  <span className="cfp-benefits__check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>

    {/* ── Section 2: Session Formats + Submission ───────────────────────── */}
    <section className="cfp-formats-section">
      <div className="row">
        {/* Heading — full width */}
        <div className="col-12">
          <h3 className="cfp-section__heading">Session Formats</h3>
        </div>

        {/* Format cards — 3 across */}
        <div className="col-12">
          <div className="cfp-formats__grid">
            {SESSION_FORMATS.map(({ title, duration, body }) => (
              <div key={title} className="cfp-format-card">
                <strong className="cfp-format-card__title">{title}</strong>
                <span className="cfp-format-card__duration">{duration}</span>
                <p className="cfp-format-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to submit */}
        <div className="col-8 col-medium-6">
          <div className="cfp-submit-notice">
            <h5 className="cfp-submit-notice__heading">How to Submit</h5>
            <p className="cfp-submit-notice__body">
              The CFP portal will officially open on{" "}
              <strong>July 1, 2026</strong>. We will update this page with a
              link to our submission portal (Indico) as soon as it goes live.
              Keep an eye on our timeline!
            </p>
          </div>
        </div>

        {/* Important dates */}
        <div className="col-4 col-medium-6">
          <div className="cfp-dates">
            <h5 className="cfp-dates__heading">Important Dates</h5>
            <table className="cfp-dates__table">
              <tbody>
                {IMPORTANT_DATES.map(({ label, date }) => (
                  <tr key={label} className="cfp-dates__row">
                    <td className="cfp-dates__label">{label}</td>
                    <td className="cfp-dates__value">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default CFP;
