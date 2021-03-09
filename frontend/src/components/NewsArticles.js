import React from 'react';
import Article from './Article';

const NewArticles = ({ articles }) => {
  console.log(articles);
  if (articles && articles.length > 0) {
    return (
      <div className='articles-wrapper'>
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    );
  } else {
    return <h1>No article found</h1>;
  }
};

export default NewArticles;
