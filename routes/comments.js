const router = require('express').Router();
const { protect } = require('../middleware/auth');

const { add, remove, listByArticle } = require('../controllers/commentController');

router.post('/:id', protect, add);

router.delete('/:id', protect, remove);

router.get('/article/:articleId', listByArticle);

module.exports = router;
