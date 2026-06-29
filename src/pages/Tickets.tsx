import React, { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';

export const Tickets: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    org: '',
    tShirtSize: 'M',
    dietary: '',
    isStudent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill out the required fields.');
      return;
    }
    // Simulate submission
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (submitted) {
    return (
      <main>
        <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-main)', padding: '3.5rem 0' }}>
          <div className="row u-vertically-center">
            <div className="col-8 col-medium-5">
              <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'var(--overlay-orange)', color: 'var(--text-main)', borderColor: 'var(--overlay-orange-strong)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
                Registration
              </span>
              <h1 style={{ color: '#f7f7f7', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
                Registration Complete!
              </h1>
              <p className="p-text--lead u-no-margin" style={{ color: 'var(--text-muted)' }}>
                Your seat has been reserved. See you in New Delhi!
              </p>
            </div>
            <div className="col-4 col-medium-1 u-align--center">
              <FaTicketAlt style={{ fontSize: '5rem', color: 'var(--text-main)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px var(--overlay-orange-strong))' }} />
            </div>
          </div>
        </section>

        <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark-alt)' }}>
          <div className="row u-align--center" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-6 col-medium-4">
              <div className="ticket-mockup">
                <div className="ticket-header" style={{ backgroundColor: 'var(--vf-color-accent)', padding: '1.5rem', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', color: 'white', borderBottom: '2px dashed #1a1a1a', position: 'relative' }}>
                  <h4 style={{ color: 'white', margin: 0, fontWeight: 700 }}>UBUCON INDIA 2026</h4>
                  <small style={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Standard Pass</small>
                </div>
                
                <div className="ticket-body" style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-main)', borderTop: 'none', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', padding: '2rem 1.5rem', position: 'relative' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '0.25rem' }}>Attendee</small>
                      <strong style={{ fontSize: '1.1rem', color: '#f7f7f7' }}>{formData.fullName}</strong>
                    </div>
                    <div>
                      <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '0.25rem' }}>Organization</small>
                      <strong style={{ fontSize: '1.1rem', color: '#f7f7f7' }}>{formData.org || 'Individual'}</strong>
                    </div>
                    <div>
                      <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '0.25rem' }}>T-Shirt Size</small>
                      <strong style={{ fontSize: '1.1rem', color: '#f7f7f7' }}>{formData.tShirtSize}</strong>
                    </div>
                    <div>
                      <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '0.25rem' }}>Date</small>
                      <strong style={{ fontSize: '1.1rem', color: '#f7f7f7' }}>Nov 14-15, 2026</strong>
                    </div>
                  </div>
                  
                  <div style={{ borderTop: '1px solid var(--border-main)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <small style={{ display: 'block', color: '#999', fontFamily: 'monospace', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                      *UBU-IND-2026-{(formData.fullName.substring(0,3) + formData.tShirtSize).toUpperCase()}*
                    </small>
                  </div>
                </div>
              </div>

              <div className="u-align--center" style={{ marginTop: '2rem' }}>
                <p className="u-text--muted">A calendar invite and details have been sent to <strong>{formData.email}</strong>.</p>
                <button 
                  className="btn-secondary" 
                  onClick={() => setSubmitted(false)}
                >
                  Register Another Person
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-main)', padding: '3.5rem 0' }}>
        <div className="row u-vertically-center">
          <div className="col-8 col-medium-5">
            <span className="p-status-label" style={{ marginBottom: '1rem', display: 'inline-block', backgroundColor: 'var(--overlay-orange)', color: 'var(--text-main)', borderColor: 'var(--overlay-orange-strong)', fontWeight: 700, padding: '0.2rem 0.6rem' }}>
              Registration
            </span>
            <h1 style={{ color: '#f7f7f7', fontWeight: 700, fontSize: '3rem', lineHeight: '1.15', marginBottom: '0.75rem' }}>
              Tickets & Passes
            </h1>
            <p className="p-text--lead u-no-margin" style={{ color: 'var(--text-muted)' }}>
              Register now to secure your spot at UbuCon India 2026 in New Delhi.
            </p>
          </div>
          <div className="col-4 col-medium-1 u-align--center">
            <FaTicketAlt style={{ fontSize: '5rem', color: 'var(--text-main)', opacity: 0.85, filter: 'drop-shadow(0 8px 16px var(--overlay-orange-strong))' }} />
          </div>
        </div>
      </section>

      {/* Section 1: Registration Form (White Background) */}
      <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark-alt)' }}>
        <div className="row">
          <div className="col-7 col-medium-4">
            <h3 style={{ color: '#f7f7f7', fontWeight: 700, marginBottom: '1rem' }}>Registration Form</h3>
            <p className="p-text--lead" style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Registration for UbuCon India 2026 is free, but space is limited. Please register in advance so we can ensure adequate seating and catering.
            </p>
            
            <form onSubmit={handleSubmit} className="p-form p-form--stacked">
              {/* Name */}
              <label htmlFor="fullName">Full Name <span style={{ color: 'red' }}>*</span></label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                placeholder="Firstname Lastname" 
                required 
                value={formData.fullName} 
                onChange={handleInputChange} 
              />

              {/* Email */}
              <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="name@example.com" 
                required 
                value={formData.email} 
                onChange={handleInputChange} 
              />

              {/* Organization */}
              <label htmlFor="org">Organization / Institution</label>
              <input 
                type="text" 
                id="org" 
                name="org" 
                placeholder="Company or School Name" 
                value={formData.org} 
                onChange={handleInputChange} 
              />

              {/* T-Shirt Size */}
              <label htmlFor="tShirtSize">T-Shirt Size</label>
              <select id="tShirtSize" name="tShirtSize" value={formData.tShirtSize} onChange={handleInputChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M (Default)</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>

              {/* Dietary Requirements */}
              <label htmlFor="dietary">Dietary / Accessibility Requirements</label>
              <input 
                type="text" 
                id="dietary" 
                name="dietary" 
                placeholder="e.g. Vegetarian, Gluten-Free, Wheelchair seating" 
                value={formData.dietary} 
                onChange={handleInputChange} 
              />

              {/* Student Checkbox */}
              <div style={{ margin: '1rem 0' }}>
                <label className="p-checkbox">
                  <input 
                    type="checkbox" 
                    name="isStudent" 
                    checked={formData.isStudent} 
                    onChange={handleInputChange} 
                  />
                  <span>I am currently a student / academic researcher</span>
                </label>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
                Complete Registration
              </button>
            </form>
          </div>

          <div className="col-5 col-medium-2">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-brand)', backgroundColor: 'var(--bg-dark)' }}>
              <h4 style={{ color: '#f7f7f7', fontWeight: 700 }}>Standard Pass</h4>
              <hr className="p-rule" />
              <p>Standard registration is free and grants you:</p>
              <ul className="p-list" style={{ margin: 0 }}>
                <li>Access to all speaking tracks & sessions</li>
                <li>Conference lunch, tea, & refreshments</li>
                <li>Official UbuCon India T-Shirt & swag kit</li>
                <li>Access to evening social network events</li>
              </ul>
            </div>
            
            <div className="p-card" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--vf-color-accent)', backgroundColor: 'var(--bg-dark)' }}>
              <h4 style={{ color: '#f7f7f7', fontWeight: 700 }}>Student Sponsorship</h4>
              <hr className="p-rule" />
              <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>
                Checking the student option enables you to apply for subsidized student travel grants to help cover railway transit fares to New Delhi. More details will be sent via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Registration Guidelines (Light Orange Background) */}
      <section className="p-strip" style={{ backgroundColor: 'var(--overlay-orange-light)', borderTop: '1px solid rgba(233, 84, 32, 0.1)', borderBottom: '1px solid rgba(233, 84, 32, 0.1)' }}>
        <div className="row">
          <div className="col-8 col-medium-5">
            <h3 style={{ color: '#f7f7f7', fontWeight: 700, marginBottom: '1.5rem' }}>Registration Guidelines</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Please note that tickets are strictly personal and non-transferable. 
              Make sure to register using your correct full name as it appears on your government-issued photo ID (needed for entry security at the venue).
            </p>
            <div className="p-notification--information" style={{ marginTop: '1.5rem', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-main)' }}>
              <div className="p-notification__content">
                <h5 className="p-notification__title" style={{ color: '#f7f7f7' }}>Entry Security Check</h5>
                <p className="p-notification__message">
                  Due to venue safety regulations at the Dr. Ambedkar International Centre, you must present a digital or printed copy of your ticket along with a valid ID card at the reception desks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-medium-1 u-vertically-center">
            <div className="p-card" style={{ borderLeft: '4px solid var(--vf-color-brand)', backgroundColor: 'var(--bg-dark)', height: '100%' }}>
              <h5 style={{ color: '#f7f7f7' }}>Need to Cancel?</h5>
              <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>
                If your plans change and you cannot attend, please email us at <a href="mailto:tickets@ubucon.in">tickets@ubucon.in</a> to release your seat for other waitlisted members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Tickets;
