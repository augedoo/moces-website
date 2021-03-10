import React from 'react';
import { Link } from 'react-router-dom';

const NewsShowcase = ({ article }) => {
  return (
    <div
      className='news-showcase'
      style={{ backgroundImage: `url(${article.image})` }}
    >
      <div className='container'>
        <div className='category'>{article.category}</div>

        <div className='bottom'>
          <h1>{article.title}</h1>

          <Link
            to={`news/articles/${article._id}`}
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
