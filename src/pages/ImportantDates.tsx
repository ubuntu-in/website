import React from 'react';
import { ProgramTabs } from '../components/ProgramTabs';
import { FaClock, FaPlane } from 'react-icons/fa';

export const ImportantDates: React.FC = () => {
  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid #eaeaea', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'rgba(119, 41, 83, 0.08)', color: 'var(--vf-color-accent)', borderColor: 'rgba(119, 41, 83, 0.15)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Program & Schedule
            </span>
            <h1 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Important Dates
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: '#555' }}>
              Make sure to keep track of these milestones for UbuCon India 2026.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaClock style={{ fontSize: '5rem', color: 'var(--vf-color-brand)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px rgba(233, 84, 32, 0.15))' }} />
          </div>
        </div>
      </section>

      {/* Reusable Tab Navigation */}
      <ProgramTabs />

      {/* Section 1: Timeline (White Background) */}
      <section className="p-strip" style={{ backgroundColor: '#ffffff' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <FaClock style={{ marginRight: '0.75rem', color: 'var(--vf-color-brand)' }} /> Milestones Timeline
            </h3>
            
            <table className="p-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Call for Proposals (CFP) Opens</strong></td>
                  <td>July 1, 2026</td>
                  <td><span className="p-status-label--positive">Upcoming</span></td>
                </tr>
                <tr>
                  <td><strong>CFP Submission Deadline</strong></td>
                  <td>September 15, 2026</td>
                  <td><span className="p-status-label" style={{ backgroundColor: '#eaeaea', color: '#555' }}>Upcoming</span></td>
                </tr>
                <tr>
                  <td><strong>Speaker Notification</strong></td>
                  <td>October 5, 2026</td>
                  <td><span className="p-status-label" style={{ backgroundColor: '#eaeaea', color: '#555' }}>Upcoming</span></td>
                </tr>
                <tr>
                  <td><strong>Schedule Announcement</strong></td>
                  <td>October 15, 2026</td>
                  <td><span className="p-status-label" style={{ backgroundColor: '#eaeaea', color: '#555' }}>Upcoming</span></td>
                </tr>
                <tr>
                  <td><strong>UbuCon India 2026 Event</strong></td>
                  <td>November 14-15, 2026</td>
                  <td><span className="p-status-label" style={{ backgroundColor: '#eaeaea', color: '#555' }}>Upcoming</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-4 col-medium-1">
            <div className="p-card" style={{ backgroundColor: '#fcfcfc' }}>
              <h4 style={{ color: 'var(--vf-color-accent)', fontWeight: 700 }}>Planning Ahead</h4>
              <hr className="p-rule" />
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                If you plan to request a travel grant, please note that travel grant applications will open alongside the speaker submission results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Travel Grants & Booking (Light Aubergine Background) */}
      <section className="p-strip" style={{ backgroundColor: 'rgba(119, 41, 83, 0.04)', borderTop: '1px solid rgba(119, 41, 83, 0.1)', borderBottom: '1px solid rgba(119, 41, 83, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: 'var(--vf-color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaPlane style={{ marginRight: '0.75rem', color: 'var(--vf-color-brand)' }} /> Travel Grants Info
            </h3>
            <p>
              UbuCon India is offering limited travel and accommodation grants to community speakers and active contributors. 
              Applications will be reviewed by the organizing committee based on need and contribution history.
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: '#ffffff' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: 'var(--vf-color-accent)' }}>Grant Application Portal</h5>
                <p className="p-notification__message">
                  The link to the travel grant request form will be published on <strong>October 5, 2026</strong>. 
                  Make sure you have your session proposal ID ready if you are applying as a speaker.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: '#ffffff', height: '100%' }}>
              <h5>Budget Allocations</h5>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Funding is distributed based on sponsors' allocations. We recommend checking early.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ImportantDates;
