import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import NewsArticles from '../components/NewsArticles';
import newsArticles from '../newsArticles';
import NewsShowcase from '../components/NewsShowcase';

const NewsScreen = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(newsArticles);
  }, []);

  return (
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
        <NewsArticles articles={articles} />
      </div>

      <div className='container'>
        <Pagination />
      </div>
    </section>
  );
};

export default NewsScreen;
