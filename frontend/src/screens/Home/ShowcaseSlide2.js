import React from 'react';

const ShowcaseSlide2 = () => {
  return (
    <div
      className='slide showcase-slide-2 showcase-wrapper'
      style={{ backgroundImage: `url("/images/showcase-3.jpg")` }}
    >
      <div className='container'>
        <div className='showcase__info'>
          <h1>Phenomenal support for diversity</h1>
          <p className='lead'>
            Our primary focus is support for humanity regardless of their ethnic
            or social background.
          </p>
          <div className='cta'>
            <a href='#!' className='btn btn-large btn-primary'>
              Become a volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide2;
