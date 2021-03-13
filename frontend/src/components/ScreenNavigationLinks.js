import React from 'react';

const ScreenNavigationLinks = () => {
  const setActiveLink = (currentPath) => {
    const path = window.location.pathname;
    if (currentPath === path) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <nav className='asScreen-navigation-links'>
      <ul>
        <li>
          <a href='/' className={`${setActiveLink('/')}`}>
            Home
          </a>
        </li>
        <li>
          <a href='/projects' className={`${setActiveLink('/projects')}`}>
            Projects
          </a>
        </li>
        <li>
          <a
            href='/news/articles'
            className={`${setActiveLink('/news/articles')}`}
          >
            News
          </a>
        </li>
        <li>
          <a href='/about' className={`${setActiveLink('/about')}`}>
            About
          </a>
        </li>
        <li>
          <a href='/contact' className={`${setActiveLink('/contact')}`}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ScreenNavigationLinks;
