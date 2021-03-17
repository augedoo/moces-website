import React from 'react';

const ShowcaseSlide1 = () => {
  return (
    <div
      className='slide showcase-slide-1 showcase-wrapper'
      style={{ backgroundImage: `url("/images/showcase-2.jpg")` }}
    >
      <div className='container'>
        <div className='showcase__info'>
          <h1>
            Mount Olive Center of Hope for the Elderly and the Sick{' '}
            <span className='text-primary'>(M.O.C.E.S)</span>
          </h1>
          <p className='lead'>
            We render humanitarian services to the population with emphasis to
            the <strong>elderly, orphans and sick persons</strong> in our
            communities and <strong>their dependents</strong> for the
            improvement of their health, welfare and standard of living in
            general.
          </p>
          <div className='cta'>
            <a href='#!' className='btn btn-large btn-primary'>
              Learn More
            </a>
            <a href='#!' className='btn btn-large btn-secondary'>
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSlide1;
