import React, { Fragment, useEffect, useState } from 'react';
import newsArticles from '../newsArticles';

const ArticleScreen = ({ match }) => {
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    const article = newsArticles.find(
      (article) => article._id === match.params.id
    );

    console.log(article);

    setCurrentArticle(article);
  }, [match.params.id]);

  console.log(currentArticle);

  return (
    <div className='screen-news'>
      <div className='article-wrapper'>
        <section className='py-2 caption'>
          <div className='container'>
            {currentArticle ? (
              <Fragment>
                <div className='category'>{currentArticle.category}</div>
                <h1 className='py-1'>{currentArticle.title}</h1>
              </Fragment>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>

        <div className='content'>
          <div className='container'>
            <main>
              <article>
                {currentArticle ? (
                  <Fragment>
                    <div className='img'>
                      <img
                        src={currentArticle.image}
                        alt={currentArticle.title}
                      />
                    </div>
                    <p className='py-2'>{currentArticle.body}</p>
                  </Fragment>
                ) : (
                  <p className='loading'>Loading...</p>
                )}
              </article>
            </main>
            <aside>
              <div className='asBox widget-categories'>
                <h3>
                  <span>Categories</span>
                </h3>

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
                    <a href='/news/articles/categories/political'>
                      Sponsorships
                    </a>
                  </li>
                  <li>
                    <a href='/news/articles/categories/political'>
                      Conferences
                    </a>
                  </li>
                </ul>
              </div>
              <div className='asBox widget-recent-post'>
                <h3>
                  <span>Recent Posts</span>
                </h3>

                <div class='items'>
                  <div class='item'>
                    {/* amotech/image */}
                    <a href='#!'>
                      <img
                        src='https://source.unsplash.com/weekly?building'
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
                        src='https://source.unsplash.com/weekly?building'
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
                        src='https://source.unsplash.com/weekly?building'
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
                        src='https://source.unsplash.com/weekly?building'
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
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleScreen;
