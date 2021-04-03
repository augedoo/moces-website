const express = require('express');

const { getArticles, createArticle } = require('../controllers/news');

const router = express.Router();

// GET    /articles   Public
router.route('/articles').get(getArticles).post(createArticle);

module.exports = router;
