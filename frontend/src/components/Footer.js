import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ScreenNavigationLinks from './ScreenNavigationLinks';

const Footer = () => {
  return (
    <div className='main-footer'>
      {window.location === '/' && (
        <Fragment>
          <h1>Get in touch. Get involved.</h1>

          <p className='lead'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolore
            magnam fugit voluptate quia explicabo facilis provident distinctio
            in mollitia.
          </p>

          <div className='contact'>
            <div className='items'>
              <div className='container'>
                <div className='location'>
                  <div className='icon'>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <span>Manhean-Accra, Ghana.</span>
                </div>
                <div className='call'>
                  <div className='icon'>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                  </div>
                  <span>
                    Call Us:{' '}
                    <a href='#!' className='text-secondary'>
                      (+233) 123-456-789
                    </a>
                  </span>
                </div>
                <div className='social'>
                  {/* facebook */}
                  <a href='#!'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-facebook'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                    </svg>
                  </a>
                  {/* twitter */}
                  <a href='#!'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-twitter'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                    </svg>
                  </a>
                  {/* instagram */}
                  <a href='#!'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-instagram'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                    </svg>
                  </a>
                  {/* youtube */}
                  <a href='#!'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-youtube'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact-from */}
            <form action='#!' className='form'>
              <div className='container form-wrapper'>
                <h1 className='text-secondary'>What's on your mind?</h1>

                <div className='form-row'>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Enter your name'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='What is on your mind'
                  ></textarea>
                </div>

                <div className='form-group submit-btn-wrapper'>
                  <button className='btn btn-large btn-secondary'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </Fragment>
      )}

      <div className='boxes'>
        <div className='container'>
          <div className='about'>
            <h1 className='footer-heading'>
              <i className='fas fa-users'></i>
              About Us
            </h1>
            <p>
              We render humanitarian services to the population with emphasis to
              the elderly, orphans and sick persons in our communities and their
              dependents for the improvement of their health, welfare and
              standard of living in general.
            </p>

            <div className='contact'>
              <div>
                <a href='/contact'>
                  <div className='icon'>
                    <i className='fas fa-envelope'></i>
                  </div>
                  <span>Contact Us</span>
                </a>
              </div>

              <div>
                <a href='/contact'>
                  <div className='icon'>
                    <i className='fas fa-phone-alt'></i>
                  </div>
                  <span>Call us anytime</span>
                </a>
              </div>
            </div>

            <div className='social'>
              <a href='#!' target='_blank'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#!' target='_blank'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#!' target='_blank'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#!' target='_blank'>
                <i className='fab fa-youtube'></i>
              </a>
            </div>
          </div>

          <div className='recent-post widget-recent-post'>
            <h1 className='footer-heading'>
              <i className='fas fa-users'></i>
              Latest Posts
            </h1>

            <div class='items'>
              <div class='item'>
                {/* amotech/image */}
                <a href='#!'>
                  <img
                    src='https://source.unsplash.com/weekly?red'
                    alt='article'
                  />
                </a>
                <div>
                  <div class='date'>
                    <i class='fas fa-calendar-day'></i>
                    <span>March 17, 2017</span>
                  </div>
                  <a href='#!'>
                    <h4>Common Symbols And Their Meanings</h4>
                  </a>
                </div>
              </div>
              <div class='item'>
                {/* amotech/image */}
                <a href='#!'>
                  <img
                    src='https://source.unsplash.com/weekly?nature'
                    alt='article'
                  />
                </a>
                <div>
                  <div class='date'>
                    <i class='fas fa-calendar-day'></i>
                    <span>March 17, 2017</span>
                  </div>
                  <a href='#!'>
                    <h4>Common Symbols And Their Meanings</h4>
                  </a>
                </div>
              </div>
              <div class='item'>
                {/* amotech/image */}
                <a href='#!'>
                  <img
                    src='https://source.unsplash.com/weekly?nature'
                    alt='article'
                  />
                </a>
                <div>
                  <div class='date'>
                    <i class='fas fa-calendar-day'></i>
                    <span>March 17, 2017</span>
                  </div>
                  <a href='#!'>
                    <h4>Common Symbols And Their Meanings</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='widget-newsletter'>
            <h1 className='footer-heading'>
              <i class='far fa-newspaper'></i> Newsletter
            </h1>
            <form>
              <input
                type='text'
                className='form-input'
                placeholder='Enter your email address'
              />
              <div className='btn btn-primary'>Subscribe</div>
            </form>

            <div className='widget-footer-categories'>
              <h1 className='footer-heading'>
                <i class='fas fa-tags'></i>
                Categories
              </h1>

              <ul>
                <li>
                  <a href='/news/articles/categories/political'>Events</a>
                </li>
                <li>
                  <a href='/news/articles/categories/political'>Projects</a>
                </li>
                <li>
                  <a href='/news/articles/categories/political'>People</a>
                </li>
                <li>
                  <a href='/news/articles/categories/political'>Donations </a>
                </li>
                <li>
                  <a href='/news/articles/categories/political'>Sponsorships</a>
                </li>
                <li>
                  <a href='/news/articles/categories/political'>Conferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='container'>
          <div>
            <p className='copyright'>
              &copy; Copyright by MOCES 2021. All rights reserved.
            </p>
            <p>Designed By Amotech Solutions</p>
          </div>

          <ScreenNavigationLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
