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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia hic iste repudiandae fugiat, incidunt natus ipsa?
              Molestiae beatae, aliquid possimus blanditiis necessitatibus,
              alias iusto vitae architecto veniam placeat illo.
            </p>
            <a href='#!' className='btn btn-primary-outlined'>
              Become a volunteer
            </a>
          </div>
          <div className='item'>
            <div className='icon'>
              <i className='fas fa-handshake'></i>
            </div>
            <h3>Sponsorship Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia hic iste repudiandae fugiat, incidunt natus ipsa?
              Molestiae beatae, aliquid possimus blanditiis necessitatibus,
              alias iusto vitae architecto veniam placeat illo.
            </p>
            <a href='#!' className='btn btn-primary-outlined'>
              Give Us Sponsorship
            </a>
          </div>
          <div className='item'>
            <div className='icon'>
              <i className='fas fa-people-carry'></i>
            </div>
            <h3>Start Foundation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia hic iste repudiandae fugiat, incidunt natus ipsa?
              Molestiae beatae, aliquid possimus blanditiis necessitatibus,
              alias iusto vitae architecto veniam placeat illo.
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
