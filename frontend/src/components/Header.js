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
              <a href='/' className={currentPath === '/' ? 'active' : ''}>
                Home
              </a>
            </li>

            <li>
              <a
                href='/projects'
                className={currentPath === '/projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href='/news/articles'
                className={currentPath === '/news/articles' ? 'active' : ''}
              >
                News
              </a>
            </li>

            <li>
              <a
                href='/about'
                className={currentPath === '/about' ? 'active' : ''}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        {/* <ul className='auth-links'>
          <li>
            <Link
              href='/login'
              className={`${
                currentPath === '/login' ? 'active' : ''
              } login-btn btn btn-medium`}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href='/signup'
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
