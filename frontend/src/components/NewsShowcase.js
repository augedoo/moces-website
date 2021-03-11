import React from 'react';
import { Link } from 'react-router-dom';

const NewsShowcase = ({ article }) => {
  return (
    <div
      className='news-showcase'
      style={{ backgroundImage: `url(${article.image})` }}
    >
      <div className='container'>
        <div className='bottom'>
          <h3>Latest Article</h3>
          <h1>{article.title}</h1>

          <Link
            to={`/news/articles/${article._id}`}
            className='btn btn-primary btn-medium'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsShowcase;
