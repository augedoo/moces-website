import React from 'react';

const NewsScreen = () => {
  return (
    <section id='screen-news' class='screen-news bg-light py-2'>
      <div class='container'>
        <h2>Editor Picks</h2>

        <div class='articles-wrapper'>
          <article class='card p-1'>
            <img src='/images/orphans.jpg' alt='entertainment' />
            <div>
              <div class='category category-ent'>Entertainment</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1 bg-secondary'>
            <div>
              <div class='category category-sports'>Sports</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div class='category category-tech'>Technology</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1'>
            <img src='/images/orphans.jpg' alt='sports' />
            <div>
              <div class='category category-sports'>Sports</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1'>
            <img src='/images/orphans.jpg' alt='technology' />
            <div>
              <div class='category category-tech'>Technology</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1 bg-primary'>
            <div>
              <div class='category category-sports'>Sports</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>

          <article class='card p-1'>
            <img src='/images/orphans.jpg' alt='entertainment' />
            <div>
              <div class='category category-ent'>Entertainment</div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eius quia tempore nobis asperiores neque optio veritatis! Eaque
                officiis accusantium accusamus, fugit quia non iste!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsScreen;
