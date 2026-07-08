import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="p-strip" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="row--50-50">
        <div className="col">
          <h2 className="home-section-title">Experience the Community Spirit</h2>
          <p>
            UbuCon is not just about technology—it is about the community. Watch the recap of the global 
            UbuCon events to see the energy, camaraderie, and collaboration that you will experience in New Delhi this November!
          </p>
          <p style={{ color: '#E95420' }}>
            Get ready for inspiring keynotes, hands-on workshops, lightning talks, and the famous social event where you can connect with speakers and fellow participants.
          </p>
        </div>
        <div className="col u-align--center">
          <div className="p-card u-no-padding home-video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/Ul8DQh3yroo?si=RQT0Jqq8-bX4yU6-" 
              title="UbuCon Aftermovie" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
