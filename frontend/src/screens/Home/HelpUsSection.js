import React from 'react';

const HelpUsSection = () => {
  return (
    <section id='help-us' className='help-us'>
      <div className='container'>
        <h1 className='lead'>Help us so we can help others</h1>
        <a href='/signup' className='btn btn-secondary-outlined btn-large'>
          Donate
        </a>
      </div>
    </section>
  );
};

export default HelpUsSection;
