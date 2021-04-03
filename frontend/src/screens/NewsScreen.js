import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Pagination from '../components/Pagination';
import NewsShowcase from '../components/NewsShowcase';
import ArticlesList from '../components/ArticlesList';
import VolunteerSection from '../components/VolunteerSection';

const NewsScreen = () => {
  const [articles, setArticles] = useState(null);
  const [articlesLoading, setArticlesLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get('/api/news/articles');
      if (!data) return [];
      setArticles(data);
    };

    fetchArticles();
  }, []);

  if (articles !== null && articles.length === 0 && !articlesLoading) {
    return (
      <div className='no-article'>
        <h1>No article found</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <section id='screen-news' className='screen-news bg-light'>
        <div>
          {articles !== null && !articlesLoading && (
            <NewsShowcase article={articles[0]} />
          )}
        </div>

        <div className='container articles-container'>
          {articles !== null && !articlesLoading ? (
            <Fragment>
              <div className='top-section'>
                <h1>Recent News</h1>
                <form className='search'>
                  <input
                    type='text'
                    placeholder='Search article'
                    className='form-input'
                  />
                </form>
              </div>
              <ArticlesList articles={articles} />
            </Fragment>
          ) : null}
        </div>

        <div className='container'>
          <Pagination />
        </div>
      </section>

      <VolunteerSection />
    </Fragment>
  );
};

export default NewsScreen;
