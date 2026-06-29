import React from 'react';

export const AboutIntroSection: React.FC = () => {
  return (
    <section className="p-strip about-intro-section">
      <div className="row">
        <div className="col-6">
          <h3 className="about-section-title">What is UbuCon India?</h3>
          <p className="p-text--lead">
            UbuCon India is a community-organized conference bringing together users, developers, enthusiasts, and contributors 
            of Ubuntu and Free & Open Source Software (FOSS) from across India.
          </p>
          <p>
            The event is organized completely by volunteers and features a variety of content including technical presentations, 
            workshops, and community discussions. Whether you are an industry veteran or a student, UbuCon India is the perfect place to learn and collaborate.
          </p>
        </div>
        <div className="col-6">
          <h3 className="about-section-title">Why attend?</h3>
          <ul className="p-list">
            <li><strong>Learn:</strong> Attend talks and workshops from local and international open source experts.</li>
            <li><strong>Connect:</strong> Meet other developers, engineers, and open source enthusiasts from across India.</li>
            <li><strong>Share:</strong> Discuss your projects, gather feedback, and find new collaborators.</li>
            <li><strong>Contribute:</strong> Learn how you can get started contributing to Ubuntu, Debian, and upstream projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
