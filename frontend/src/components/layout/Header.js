import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScreenNavigationLinks from '../ScreenNavigationLinks';

const Header = () => {
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    // eslint-disable-next-line
  }, [window.location, currentPath]);

  return (
    <header className='main-header'>
      <div className='container'>
        <div className='brand'>
          {/* <img
            src='/logo.png'
            alt='moces| mount olive center of hope for the elderly and the sick'
          /> */}
          <h1>
            <a href='#!'>Moces</a>
          </h1>
        </div>

        <ScreenNavigationLinks />

        <ul className='auth-links'>
          <li>
            <Link
              href='/login'
              className={`${
                currentPath === '/login' ? 'active' : ''
              } login-btn btn btn-light-outlined`}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href='/signup'
              className={`${
                currentPath === '/signup' ? 'active' : ''
              } signup-btn btn btn-secondary-outlined`}
            >
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
