import React from 'react';
import newsArticles from '../../newsArticles';

const NewsSection = () => {
  const renderNewsList = (newsArticles) => {
    if (!newsArticles || newsArticles.length === 0) {
      return (
        <p className='no-article'>
          No article uploaded yet
          <span>Please check back later</span>
        </p>
      );
    }

    return newsArticles.map((article) => (
      <li key={article._id}>
        <h3>{article.title}</h3>
        <p className='line-clamped'></p>
      </li>
    ));
  };

  return (
    <div id='news' className='news'>
      <div className='list-heading'>Latest News</div>
      <ul>{renderNewsList(newsArticles)}</ul>
    </div>
  );
};

export default NewsSection;
