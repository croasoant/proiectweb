const router = require('express').Router();
const { protect } = require('../middleware/auth');

// ✅ Importă TOATE funcțiile pe care le folosești aici:
const { add, remove, listByArticle } = require('../controllers/commentController');

// ➕ Adaugă comentariu la articol
router.post('/:id', protect, add);

// 🗑️ Șterge comentariu după id
router.delete('/:id', protect, remove);

// 📋 Listează comentarii pentru articol
router.get('/article/:articleId', listByArticle);

module.exports = router;
