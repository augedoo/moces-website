import React from 'react';

const GetInvolvedSection = () => {
  return (
    <div id='get-involved' className='get-involved'>
      <h1 className='section-title'>How you can get involved</h1>
      <h2 className='section-subtitle'>Join our cause</h2>

      <div className='container'>
        <div className='items'>
          <div className='item'>
            <div className='icon'>
              <i className='fas fa-hand-paper'></i>
            </div>
            <h3>Voluntary Support</h3>
            <p>
              Invest in your team’s professional development by giving them the
              tools they need to strengthen their skills. By providing access to
              Pluralsight, you help develop critical skills with courses and
              content that improve organizational efficiency and help you
              deliver on your mission.
            </p>
            <a href='#!' className='btn btn-primary-outlined'>
              Become a volunteer
            </a>
          </div>
          <div className='item'>
            <div className='icon'>
              <i className='fas fa-hand-paper'></i>
            </div>
            <h3>Sponsorship Support</h3>
            <p>
              Invest in your team’s professional development by giving them the
              tools they need to strengthen their skills. By providing access to
              Pluralsight, you help develop critical skills with courses and
              content that improve organizational efficiency and help you
              deliver on your mission.
            </p>
            <a href='#!' className='btn btn-primary-outlined'>
              Give Us Sponsorship
            </a>
          </div>
          <div className='item'>
            <div className='icon'>
              <i className='fas fa-hand-paper'></i>
            </div>
            <h3>Start Foundation</h3>
            <p>
              Invest in your team’s professional development by giving them the
              tools they need to strengthen their skills. By providing access to
              Pluralsight, you help develop critical skills with courses and
              content that improve organizational efficiency and help you
              deliver on your mission.
            </p>
            <a href='#!' className='btn btn-primary-outlined'>
              Build a Foundation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
