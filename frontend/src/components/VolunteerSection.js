import React from 'react';

const VolunteerSection = () => {
  return (
    <section
      className='as-section-volunteer'
      style={{ background: `url('/images/world-map-light-bg.png')` }}
    >
      <div className='container'>
        <h1>Become a volunteer</h1>
        <p className='lead'>Join us for a better life and beautiful future</p>
        <a href='/signup' className='btn btn-secondary btn-large'>
          Join us now
        </a>
      </div>
    </section>
  );
};

export default VolunteerSection;
