import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <h1>Moces</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/' className={currentPath === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to='/projects'
                className={currentPath === '/projects' ? 'active' : ''}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/news'
                className={currentPath === '/news' ? 'active' : ''}
              >
                News
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                className={currentPath === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        {/* <ul className='auth-links'>
          <li>
            <Link
              to='/login'
              className={`${
                currentPath === '/login' ? 'active' : ''
              } login-btn btn btn-medium`}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className={`${
                currentPath === '/signup' ? 'active' : ''
              } signup-btn btn btn-medium btn-dark`}
            >
              Join Us
            </Link>
          </li>
        </ul>*/}
      </div>
    </header>
  );
};

export default Header;
