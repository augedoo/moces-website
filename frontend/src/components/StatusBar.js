import React from 'react';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <div className='container'>
        <div className='call'>
          <a href='#!'>
            <i class='fas fa-phone-alt'></i>
            Call Us: <span>(+233) 123-456-789</span>
          </a>
        </div>

        <div className='social'>
          <a href='#!' target='_blank'>
            <i class='fab fa-facebook'></i>
          </a>
          <a href='#!' target='_blank'>
            <i class='fab fa-twitter'></i>
          </a>
          <a href='#!' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#!' target='_blank'>
            <i className='fab fa-youtube'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
