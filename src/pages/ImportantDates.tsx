import React from "react";
import { ProgramTabs } from "../components/ProgramTabs";
import { FaClock, FaPlane } from "react-icons/fa";
import "../styles/Dates.scss";

// ─── Data ────────────────────────────────────────────────────────────────────

const MILESTONES = [
  {
    label: "Call for Proposals (CFP) Opens",
    date: "July 1, 2026",
    status: "next",
  },
  {
    label: "CFP Submission Deadline",
    date: "September 15, 2026",
    status: "upcoming",
  },
  {
    label: "Speaker Notification",
    date: "October 5, 2026",
    status: "upcoming",
  },
  {
    label: "Schedule Announcement",
    date: "October 15, 2026",
    status: "upcoming",
  },
  {
    label: "UbuCon India 2026 Event",
    date: "November 14–15, 2026",
    status: "upcoming",
  },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export const ImportantDates: React.FC = () => (
  <main>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="dates-hero">
      <div className="row">
        <div className="col-12">
          <span className="dates-hero__eyebrow">Program &amp; Schedule</span>
          <h1 className="dates-hero__title">Important Dates</h1>
          <p className="dates-hero__lead">
            Make sure to keep track of these milestones for UbuCon India 2026.
          </p>
        </div>
      </div>
    </section>

    {/* ── Tab Navigation ────────────────────────────────────────────────── */}
    <ProgramTabs />

    {/* ── Section 1: Timeline ───────────────────────────────────────────── */}
    <section className="p-strip dates-timeline-section">
      <div className="row">
        {/* Timeline table */}
        <div className="col-8 col-medium-6">
          <h3 className="dates-section__heading">
            <FaClock
              className="dates-section__heading-icon"
              aria-hidden="true"
            />
            Milestones Timeline
          </h3>

          <table className="p-table dates-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MILESTONES.map(({ label, date, status }) => (
                <tr key={label}>
                  <td>
                    <strong>{label}</strong>
                  </td>
                  <td>{date}</td>
                  <td>
                    <span className={`dates-badge dates-badge--${status}`}>
                      Upcoming
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Planning Ahead sidebar */}
        <div className="col-4 col-medium-6">
          <aside className="dates-planning">
            <h4 className="dates-planning__heading">Planning Ahead</h4>
            <hr className="p-rule dates-planning__rule" />
            <p className="dates-planning__body">
              If you plan to request a travel grant, please note that travel
              grant applications will open alongside the speaker submission
              results.
            </p>
          </aside>
        </div>
      </div>
    </section>

    {/* ── Section 2: Travel Grants ──────────────────────────────────────── */}
    <section className="dates-grants-section">
      <div className="row">
        {/* Travel grants info */}
        <div className="col-8 col-medium-6">
          <h3 className="dates-section__heading">
            <FaPlane
              className="dates-section__heading-icon"
              aria-hidden="true"
            />
            Travel Grants Info
          </h3>
          <p className="dates-grants__intro">
            UbuCon India is offering limited travel and accommodation grants to
            community speakers and active contributors. Applications will be
            reviewed by the organizing committee based on need and contribution
            history.
          </p>

          <div className="dates-notice">
            <h5 className="dates-notice__heading">Grant Application Portal</h5>
            <p className="dates-notice__body">
              The link to the travel grant request form will be published on{" "}
              <strong>October 5, 2026</strong>. Make sure you have your session
              proposal ID ready if you are applying as a speaker.
            </p>
          </div>
        </div>

        {/* Budget allocations sidebar */}
        <div className="col-4 col-medium-6">
          <aside className="dates-budget">
            <h5 className="dates-budget__heading">Budget Allocations</h5>
            <p className="dates-budget__body">
              Funding is distributed based on sponsors' allocations. We
              recommend checking early.
            </p>
          </aside>
        </div>
      </div>
    </section>
  </main>
);

export default ImportantDates;
