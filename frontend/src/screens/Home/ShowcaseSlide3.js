import React from 'react';

const ShowcaseSlide3 = () => {
  return (
    <div
      className='slide showcase-slide-3 showcase-wrapper'
      style={{ backgroundImage: `url("/images/showcase-1.jpg")` }}
    >
      <div className='container'>
        <div className='showcase__info'>
          <h1>Sharing is caring</h1>
          <p className='lead'>
            Share your clothes, food or anything with the need.
          </p>
          <div className='cta'>
            <a href='#!' className='btn btn-large btn-primary'>
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide3;
