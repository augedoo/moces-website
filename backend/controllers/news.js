const { blue } = require('colors');
const newsArticles = require('../data/newsArticles');
const Article = require('../models/Article');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getArticles = (req, res, next) => {
  res.status(200).json(newsArticles);
};

// @desc      Create new article
// @route     POST /api/news/article
// @access    Private
exports.createArticle = asyncHandler(async (req, res, next) => {
  req.member = {
    id: '5f879e9557710c288cb7b4a0',
    role: 'admin',
  };
  req.body.author = req.member.id;

  // Check if is member is an admin or a publisher
  const memberRole = req.member.role;
  if (memberRole !== 'admin' && memberRole !== 'publisher') {
    return new ErrorResponse(
      `User role ${memberRole} is not authorized to post an article.`,
      400
    );
  }

  const article = await Article.create(req.body);

  res.status(200).json({ success: true, data: article });
  console.log(blue(article));
});
