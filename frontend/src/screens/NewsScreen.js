import React, { useState, useEffect, Fragment } from 'react';
import Pagination from '../components/Pagination';
import newsArticles from '../newsArticles';
import NewsShowcase from '../components/NewsShowcase';
import ArticlesList from '../components/ArticlesList';
import VolunteerSection from '../components/VolunteerSection';

const NewsScreen = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(newsArticles);
  }, []);

  return (
    <Fragment>
      <section id='screen-news' className='screen-news bg-light'>
        {articles && articles.length >= 1 && (
          <NewsShowcase article={articles[0]} />
        )}
        <div className='container articles-container'>
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
