import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date('2026-11-14T09:00:00+05:30'); // UbuCon India 2026 date (Target Date: Nov 14, 2026)

  const calculateTimeRemaining = (): TimeRemaining => {
    const total = targetDate.getTime() - new Date().getTime();
    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--vf-color-brand)' }}>
      <h4 className="u-align--center u-no-margin--top">Countdown to UbuCon India 2026</h4>
      <div className="u-align--center countdown-timer-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
          <span className="p-heading--1 u-no-margin" style={{ fontWeight: 700, color: 'var(--vf-color-brand)' }}>
            {String(timeRemaining.days).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Days</span>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, alignSelf: 'center', color: '#999' }}>:</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
          <span className="p-heading--1 u-no-margin" style={{ fontWeight: 700, color: 'var(--vf-color-brand)' }}>
            {String(timeRemaining.hours).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Hours</span>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, alignSelf: 'center', color: '#999' }}>:</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
          <span className="p-heading--1 u-no-margin" style={{ fontWeight: 700, color: 'var(--vf-color-brand)' }}>
            {String(timeRemaining.minutes).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Mins</span>
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, alignSelf: 'center', color: '#999' }}>:</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
          <span className="p-heading--1 u-no-margin" style={{ fontWeight: 700, color: 'var(--vf-color-brand)' }}>
            {String(timeRemaining.seconds).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Secs</span>
        </div>
      </div>
    </div>
  );
};
