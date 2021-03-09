import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <article className='card'>
      <div className='image-wrapper'>
        <img src={article.image} alt={article.title} />
      </div>
      <div className='content'>
        <div className='category'>{article.category}</div>
        <Link to={`/news/${article._id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>{article.body}</p>
        <Link to={`/news/${article._id}`} className='continue-btn'>
          Continue Reading <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </article>
  );
};

export default Article;
