import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const NewsScreen = () => {
  return (
    <section id='screen-news' className='screen-news bg-light py-2'>
      <div className='container'>
        <h1>Recent News</h1>

        <div className='articles-wrapper'>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                  sit Lorem ipsum dolor sit.
                </h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/doctor.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/world-map.png' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/africa-map.png' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
          <article className='card'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div className='category'>Donation</div>
              <Link to='#!'>
                <h3>Lorem ipsum dolor sit Lorem ipsum dolor sit.</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
              <Link to='#!' className='continue-btn'>
                Continue Reading <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </article>
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default NewsScreen;
