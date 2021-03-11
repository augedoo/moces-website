import React from 'react';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles }) => {
  console.log(articles);
  if (articles && articles.length > 0) {
    return (
      <div className='articles-wrapper'>
        {articles.map((article) => {
          return <ArticleItem key={article._id} article={article} />;
        })}
      </div>
    );
  } else {
    return <h1>No article found</h1>;
  }
};

export default ArticlesList;
