import React from 'react';

const HomeScreen = () => {
  return (
    <div className='screen-home'>
      <section id='showcase' className='showcase'>
        <div className='container'>
          <div className='showcase__info'>
            <div className='icon'>
              <svg version='1.1' x='0px' y='0px' viewBox='0 0 122.88 102.36'>
                <g>
                  <path d='M29.83,89.55V52.63h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.9c5.84,0.35,8.9,6.27,3.22,10.16 c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.4,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.64-0.01,13.92-1.47,17.77-7.5 l1.93-4.51l19.19-9.51c9.6-3.16,16.42,6.88,9.35,13.87c-13.9,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0 L29.83,89.55L29.83,89.55z M76.08,7.8c3.63-3.79,6.17-7.06,11.77-7.7c10.5-1.21,20.16,9.55,14.86,20.14 c-1.51,3.02-4.58,6.6-7.98,10.12c-3.73,3.86-7.86,7.65-10.76,10.52l-7.89,7.83l-6.52-6.28c-7.84-7.55-20.63-17.06-21.05-28.84 c-0.3-8.25,6.22-13.54,13.7-13.44C68.91,0.23,71.72,3.56,76.08,7.8L76.08,7.8L76.08,7.8z M0,49.08h24.83v44.18H0V49.08L0,49.08z' />
                </g>
              </svg>
            </div>
            <h1>
              Mount Olive Center of Hope for the Elderly and The Sick{' '}
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
              <a href='#!' className='btn btn-large btn-dark'>
                Donate
              </a>
            </div>
          </div>

          <div className='slides'>
            <div className='overlay'></div>
            <img src='/images/orphans.jpg' alt='' />
            <div className='play-btn'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
