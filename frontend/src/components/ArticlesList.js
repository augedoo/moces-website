import React from 'react';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles }) => {
  return (
    <div className='articles-wrapper'>
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />;
      })}
    </div>
  );
};

export default ArticlesList;
