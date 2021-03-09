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
      <div className='container'>
        <h1>Recent News</h1>
        <NewsArticles articles={articles} />
        <Pagination />
      </div>
    </section>
  );
};

export default NewsScreen;
